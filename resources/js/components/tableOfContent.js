import Alpine from "alpinejs";

export default () => ({
    activeHeading: null,
    init() {
        Alpine.nextTick(()=>{
            const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

            if (headingElements.length > 0) {
                this.activeHeading = headingElements[0].querySelector("a")?.id;
            }
            
            const observer = new IntersectionObserver(
                (entries) => {
                    const visibleHeadings = entries.filter(
                        (entry) => entry.isIntersecting,
                    )

                    visibleHeadings.sort((a, b) => {
                        return a.target.offsetTop - b.target.offsetTop;
                    })

                    if (visibleHeadings.length > 0) {
                        // Find the visible heading with the lowest top value
                        const topHeading = visibleHeadings.reduce(
                            (prev, current) =>
                                prev.boundingClientRect.top <
                                current.boundingClientRect.top
                                    ? prev
                                    : current,
                        )

                        this.activeHeading = topHeading.target.querySelector('a')?.id;
                    }
                },
                { rootMargin: '0px 0px -75% 0px', threshold: 0.7 },
            )
    
            headingElements.forEach(heading => observer.observe(heading));
        })

    },
});
