import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'
import themeSwitcher from './components/themeSwitcher';
import tableOfContent from './components/tableOfContent';

window.Alpine = Alpine

// control themming
document.addEventListener("alpine:init", themeSwitcher);

// plugins 
Alpine.plugin(anchor)

// components
Alpine.data('tableOfContents',tableOfContent);


Alpine.start()