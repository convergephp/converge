export default () => ({
    open: false,
    isOpen() {
        return this.open;
    },
    toggle() {
        this.open ? this.close() : this.openSidebar();
    },
    openSidebar() {
        this.open = true;
    },
    close() {
        this.open = false;
    }
});
