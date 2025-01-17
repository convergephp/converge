export default () => {
    return {
        tableOfContent: "",
        offset: 100,
        headingPermalinks: [],
        activeTocLink: null,
        init() {
            this.$nextTick(() => {
                this.headingPermalinks = this.$el.querySelectorAll(
                    "[data-doc] .heading-permalink"
                );
                this.$watch("activeTocLink", () => {

                    this.tableOfContentLinks.forEach((item) => {
                        item.style.setProperty("color", ""); // Remove any previously set color
                    });
                   
                    if (this.activeTocLink) {
                        this.activeTocLink.style.setProperty("color", "#9F7AEA");
                    }
                });
                this.adjustTableOfContent();
                // this.handlePermalinks();
                if (!this.activeTocLink && this.tableOfContentLinks.length > 0) {
                    this.activeTocLink = this.tableOfContentLinks[0];
                }
            });
        },
        get tableOfContentLinks() {
            return this.$el.querySelectorAll("ul.table-of-contents a");
        },
        handlePermalinks() {
            for (const link of this.headingPermalinks) {
                const rect = link.getBoundingClientRect();
                const isInViewport =
                    rect.top > this.offset && rect.top < window.innerHeight;

                if (isInViewport) {
                    this.activeTocLink = Array.from(this.tableOfContentLinks).find(
                        (item) => item.href === link.href
                    );
                    break; // Stop after activating the first link
                }
            }
            // let links = Array.from(this.headingPermalinks).map((link) => {
            //     this.handlePermalink(link);
            // });
        },
        handlePermalink(link) {
            const rect = link.getBoundingClientRect();
            const isInViewport =
                rect.top > this.offset && rect.top < window.innerHeight;

            if (isInViewport) {
                this.activeTocLink = Array.from(this.tableOfContentLinks).find(
                    (item) => item.href === link.href
                );
            }
        },
        adjustTableOfContent() {
            const tableOfContentElements = this.$el.querySelectorAll(
                "ul.table-of-contents"
            );
            if (tableOfContentElements) {
                this.tableOfContent = tableOfContentElements[0].outerHTML;
                tableOfContentElements.forEach((tableOfContentElement) =>
                    tableOfContentElement.remove()
                );
            }
        },
    };
};