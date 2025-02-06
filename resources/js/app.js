import Alpine from "alpinejs";
import anchor from "@alpinejs/anchor";
import themeSwitcher from "./components/themeSwitcher";
import tableOfContent from "./components/tableOfContent";
import tabs from "./components/tabs";

window.Alpine = Alpine;

// control themming
document.addEventListener("alpine:init", themeSwitcher);

// plugins
Alpine.plugin(anchor);

// components
Alpine.data("tableOfContents", tableOfContent);
Alpine.data("tabs", tabs);

Alpine.start();
