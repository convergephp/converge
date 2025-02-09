export default () => {
    return {
        tableOfContent: "",
        offset: 60,
        headingPermalinks: [],
        activeTocLink: null,
        init() {
            this.$nextTick(() => {
                this.headingPermalinks = this.$el.querySelectorAll(
                    "[data-doc] .heading-permalink"
                );

                // this.$watch("activeTocLink", () => {
                //     this.tableOfContentLinks.forEach((item) => {
                //         item.style.removeProperty("color");
                //     });

                //     if (this.activeTocLink) {
                //         this.activeTocLink.style.setProperty(
                //             "color",
                //             "#9F7AEA"
                //         );
                //     }
                // });
                this.adjustTableOfContent();
                // setTimeout(() => {
                //     this.activateFistLinkIfIntersected();
                // }, 100);
            });
        },
        get tableOfContentLinks() {
            return this.$el.querySelectorAll("ul.table-of-contents a");
        },
        handlePermalinks() {
            let visibleLinks = Array.from(this.headingPermalinks).filter(
                (link) => this.inViewPort(link)
            );
            console.log(visibleLinks);
            this.activateLink(visibleLinks[0]);
        },
        activateLink(link) {
            this.activeTocLink = Array.from(this.tableOfContentLinks).find(
                (item) => item.href === link.href
            );
        },
        activateFistLinkIfIntersected() {
            const firstLink = Array.from(this.headingPermalinks).at(0);
            if (this.inViewPort(firstLink)) {
                this.activateLink(firstLink);
            }
        },
        inViewPort(link) {
            const rect = link.getBoundingClientRect();
            return rect.top > this.offset && rect.top < window.innerHeight;
        },
        adjustTableOfContent() {
            const tableOfContentElements = this.$el.querySelectorAll(
                "ul.table-of-contents"
            );
            if (tableOfContentElements[0]) {
                this.tableOfContent = tableOfContentElements[0].outerHTML;
                tableOfContentElements.forEach((tableOfContentElement) =>
                    tableOfContentElement.remove()
                );
            }
        },
    };
};
