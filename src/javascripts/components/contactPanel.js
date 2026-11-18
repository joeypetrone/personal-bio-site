// Contact side panel. The header's Contact link opens it instead of jumping to the footer.
// It's a <dialog>, so the browser handles keeping keyboard focus inside it
// and hides the page behind it from screen readers.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const setUpContactPanel = () => {
  const panel = document.getElementById('contact-panel');
  const contactLink = document.querySelector('.nav a[href="#contact"]');

  // Slide the panel back out, then actually close it.
  const closePanel = () => {
    if (!panel.open || panel.classList.contains('closing')) return;
    if (reduceMotion.matches) {
      panel.close();
      return;
    }

    panel.classList.add('closing');
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      panel.classList.remove('closing');
      panel.close();
    };
    panel.addEventListener('animationend', finish, { once: true });
    setTimeout(finish, 400); // backup in case the animation event never fires
  };

  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    panel.showModal();
  });

  panel.querySelector('.contact-close').addEventListener('click', closePanel);

  // Close only when the click is outside the panel's box (on the dimmed page).
  // Clicks on empty space inside the panel also land on the <dialog> itself,
  // so check where the click happened, not just what was clicked.
  panel.addEventListener('click', (event) => {
    if (event.target !== panel) return;
    const box = panel.getBoundingClientRect();
    const inside = event.clientX >= box.left && event.clientX <= box.right
      && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) closePanel();
  });

  // Esc normally closes a <dialog> instantly; slide it out instead.
  panel.addEventListener('cancel', (event) => {
    event.preventDefault();
    closePanel();
  });
};

export default { setUpContactPanel };
