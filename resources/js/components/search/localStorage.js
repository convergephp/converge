export default ({ maxItemsAllowed = 10 }) => ({
    search_history: [],
    favorite_items: [],
    maxItemsAllowed,

    init() {
        this.search_history = this.getLocalStorage("search_history");
        this.favorite_items = this.getLocalStorage("favorite_items");

        this.$watch("search_history", (val) =>
            this.setLocalStorage("search_history", val)
        );
        this.$watch("favorite_items", (val) =>
            this.setLocalStorage("favorite_items", val)
        );
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
