export default () => ({
    open: false,
    isOpen() {
        return this.open;
    },
    toggle() {
        if (this.open) {
            return this.close();
        }

        this.$refs.button.focus();

        this.open = true;
    },
    close(focusAfter) {
        if (!this.open) return;

        this.open = false;

        focusAfter && focusAfter.focus();
    },
    handleFocusInOut(event) {
        const panel = this.$refs.panel;
        const button = this.$refs.button;
        const target = event.target;

        if (panel.contains(target) || button.contains(target)) return;

        const lastFocusedElement = document.activeElement;

        if (this.shouldCloseDropdown(button, panel, lastFocusedElement))
            this.close(button);
    },
    shouldCloseDropdown(button, panel, lastFocusedElement) {
        return (
            !button.contains(lastFocusedElement) &&
            !panel.contains(lastFocusedElement) &&
            lastFocusedElement &&
            button.compareDocumentPosition(lastFocusedElement) &
                Node.DOCUMENT_POSITION_FOLLOWING
        );
    },
});
