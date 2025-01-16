import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'
import themeSwitcher from './components/themeSwitcher';

window.Alpine = Alpine

// control themming
document.addEventListener("alpine:init", themeSwitcher);

// plugins 
Alpine.plugin(anchor)


Alpine.start()