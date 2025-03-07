export default ({
    lightMode = null,
    darkMode = null,
    highlightingLightMode = null,
    highlightingDarkMode = null,
}) => ({
    activeTheme: null,
    lightMode,
    darkMode,

    updateHighlighterTheme() {
        let codeTheme =
            this.activeTheme === "dark"
                ? highlightingDarkMode
                : highlightingLightMode;

        const style = document.createElement("style");

        style.innerHTML = codeTheme;

        document.head.appendChild(style);
    },
    init() {
        this.activeTheme = localStorage.getItem("theme") ?? "system";
        this.updateHighlighterTheme();
        console.log("dde");

        const root = document.documentElement;
        window.Alpine.store(
            "theme",
            this.activeTheme === "dark" ||
                (this.activeTheme === "system" &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
                ? "dark"
                : "light"
        );

        window.addEventListener("theme-changed", (event) => {
            this.activeTheme = event.detail;

            localStorage.setItem("theme", this.activeTheme);

            if (this.activeTheme === "system") {
                this.activeTheme = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches
                    ? "dark"
                    : "light";
            }

            window.Alpine.store("theme", this.activeTheme);
        });

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                if (localStorage.getItem("theme") === "system") {
                    window.Alpine.store(
                        "theme",
                        event.matches ? "dark" : "light"
                    );
                }
            });

        window.Alpine.effect(() => {
            this.activeTheme = window.Alpine.store("theme");

            this.activeTheme === "dark"
                ? this.applyStyles(root, darkMode)
                : this.applyStyles(root, lightMode);
            this.updateHighlighterTheme();
        });
        this.updateHighlighterTheme();
    },
    applyStyles(element, theme) {
        Object.entries(JSON.parse(theme)).forEach(([key, value]) => {
            element.style.setProperty(key, value);
        });
    },
});
