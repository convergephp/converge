export default ({route}) => ({
    query: "",
    results: [],
    isLoading: false,   
    search_history: [],
    favorite_items: [],
    maxItemsAllowed: 10,
    route,

    init() {
        this.search_history = this.getLocalStorage("search_history");
        this.favorite_items = this.getLocalStorage("favorite_items");

        this.$watch("search_history", (val) =>
            this.setLocalStorage("search_history", val)
        );
        this.$watch("favorite_items", (val) =>
            this.setLocalStorage("favorite_items", val)
        );

        this.$watch("query", async (query) => {
            if (query.trim() === "") {
                this.results = [];
            } else {
                this.isLoading = true;
                this.results = await this.performSearch(query);
                this.isLoading = false;
                console.log(this.results)   
            }
        });
    },
    async performSearch(query) {
        const response = await fetch(`${this.route}?q=${query}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return  await response.json();
        
    },
    highlightMatchingLetters: function (title, query) {
        let highlightedTitle = "";
        let lowerCaseTitle = title.toLowerCase();
        let lowerCaseQuery = query.toLowerCase();
        let index = lowerCaseTitle.indexOf(lowerCaseQuery);

        while (index !== -1) {
            highlightedTitle += title.substring(0, index);
            highlightedTitle += `<span style="color: yellow; font-weight: semi-bold;">${title.substring(
                index,
                index + query.length
            )}</span>`;
            title = title.substring(index + query.length);
            lowerCaseTitle = title.toLowerCase();
            index = lowerCaseTitle.indexOf(lowerCaseQuery);
        }

        highlightedTitle += title;
        return highlightedTitle;
    },

    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    },


    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    updateList(list, newItem) {
        return [
            newItem,
            ...list.filter((el) => el.title !== newItem.title),
        ].slice(0, this.maxItemsAllowed);
    },

    addToSearchHistory(searchItem, url) {
        const searchItemObject = { title: searchItem, url };
        this.search_history = this.updateList(
            this.search_history,
            searchItemObject
        );
    },

    deleteFromHistory(searchItem) {
        this.search_history = this.search_history.filter(
            (el) => el.title !== searchItem
        );
    },

    deleteAllHistory() {
        this.search_history = [];
    },

    addToFavorites(favItem, url) {
        this.deleteFromHistory(favItem);
        const favItemObject = { title: favItem, url };
        this.favorite_items = this.updateList(
            this.favorite_items,
            favItemObject
        );
    },

    deleteFromFavorites(favItem) {
        this.favorite_items = this.favorite_items.filter(
            (el) => el.title !== favItem
        );
    },

    deleteAllFavorites() {
        this.favorite_items = [];
    },
});
