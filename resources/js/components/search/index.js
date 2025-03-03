export default () => ({
    query:'',
    init(){
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
        });F
    }
});
