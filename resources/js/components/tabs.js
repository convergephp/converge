export default () => ({
    activeId: null,
    init() {
        this.$nextTick(() => this.activate(this.$id("tab", 1)));
    },
    activate(id) {
        this.activeId = id;
    },
    isActive(id) {
        return this.activeId === id;
    },
    getTabIndex(el, parent) {
        return Array.from(parent.children).indexOf(el) + 1;
    },
});
