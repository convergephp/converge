const performSearch = async (query) => {
    try {
        const response = await fetch(
            `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=80`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const results = await response.json();
        return formatResults(results.hits, query);
    } catch (error) {
        console.error("Error performing search:", error);
        return [];
    }
};

function formatResults(results, query) {
    return results
        .filter(
            (item) =>
                item.title &&
                typeof item.title === "string" &&
                item.title.length >= 70 &&
                item.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => {
            item.title = item.title.substring(0, 80).toLowerCase();
            return item;
        });
}

export default performSearch;
