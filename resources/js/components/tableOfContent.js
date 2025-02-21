export default ()=>({
    activeHeading: null,
    init() {
        const headingElements = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
        const observer = new IntersectionObserver((entries) => {
            const visibleHeadings = entries.filter(entry => entry.isIntersecting);
            if (visibleHeadings.length > 0) {
                const topHeading = visibleHeadings.reduce((prev, current) =>
                    prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
                );
                this.activeHeading = topHeading.target.querySelector('a').id;
            }
        }, { rootMargin: '0px 0px -80px 0px', threshold: 1 });
        headingElements.forEach(heading => observer.observe(heading));
    }
})