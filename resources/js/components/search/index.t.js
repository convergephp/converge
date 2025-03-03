export default (route) => ({
    query: "",
    init() {
        this.$watch("query", async (query) => {
            if (query.trim() === "") {
                this.results = [];
            } else {
                try {
                    let results = await performSearch(query);
                    this.results = results.map((item) => ({
                        ...item,
                        highlightedTitle: this.highlightMatchingLetters(
                            item.title,
                            query
                        ),
                    }));
                } catch (error) {
                    console.error("Error performing search:", error);
                    this.results = [];
                }
            }
        });
    },
    async performSearch(query) {
        try {
            const response = await fetch(`${route}?query=${query}`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return await response.json();
        } catch (error) {
            console.error("Error performing search:", error);

            return [];
        }
    },
});
