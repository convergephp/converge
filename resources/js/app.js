import Alpine from 'alpinejs'
import themeSwitcher from './components/themeSwitcher';
 
window.Alpine = Alpine

// control themming
document.addEventListener("alpine:init", themeSwitcher);

Alpine.start()