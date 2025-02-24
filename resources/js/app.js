import Alpine from "alpinejs";
import anchor from "@alpinejs/anchor";
import collapse from "@alpinejs/collapse";
import focus  from "@alpinejs/focus";

import tableOfContent from "./components/tableOfContent";
import tabs from "./components/tabs";
import dropdown from "./components/dropdown";
import sidebar from "./components/sidebar";
import clipboard from "./components/clipboard";
import themeSwitcher from "./components/themeSwitcher";


// plugins
Alpine.plugin(anchor);
Alpine.plugin(collapse);
Alpine.plugin(focus)

// components
Alpine.data("themeSwitcher", themeSwitcher);
Alpine.data("tableOfContent", tableOfContent);
Alpine.data("codeBlockClipboard", clipboard);
Alpine.data("tabs", tabs);
Alpine.data("dropdown", dropdown);
Alpine.data("sidebar", sidebar);

window.Alpine = Alpine;
Alpine.start();
