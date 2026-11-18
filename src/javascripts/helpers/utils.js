// Put an HTML string inside the element with this id.
const printToDom = (id, html) => {
  document.getElementById(id).innerHTML = html;
};

// Make text safe to drop into HTML (so a "<" in the JSON can't break the page).
const escapeHtml = (text = '') => String(text)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// An icon from the <svg> symbols at the top of index.html.
const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#icon-${name}"/></svg>`;

export default { printToDom, escapeHtml, icon };
