import Alpine from "alpinejs";
import anchor from "@alpinejs/anchor";

import tableOfContent from "./components/tableOfContent";
import tabs from "./components/tabs";
import dropdown from "./components/dropdown";
import sidebar from "./components/sidebar";
import clipboard from "./components/clipboard";
import themeSwitcher from "./components/themeSwitcher";

window.Alpine = Alpine;

// control themming
// document.addEventListener("alp   ine:init", themeSwitcher);

// plugins
Alpine.plugin(anchor);

// components
Alpine.data("themeSwitcher", themeSwitcher);
Alpine.data("tableOfContents", tableOfContent);
Alpine.data("codeBlockClipboard", clipboard);
Alpine.data("tabs", tabs);
Alpine.data("dropdown", dropdown);
Alpine.data("sidebar", sidebar);

Alpine.start();
