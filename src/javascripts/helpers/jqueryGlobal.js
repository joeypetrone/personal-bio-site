import $ from 'jquery';

// The site's code uses `$` everywhere without importing it.
// webpack used to add it automatically; with Vite we put it on window once.
window.$ = $;
window.jQuery = $;
