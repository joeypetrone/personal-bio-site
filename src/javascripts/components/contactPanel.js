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

  // A click on the dimmed area outside the panel lands on the <dialog> itself: close it.
  panel.addEventListener('click', (event) => {
    if (event.target === panel) closePanel();
  });

  // Esc normally closes a <dialog> instantly; slide it out instead.
  panel.addEventListener('cancel', (event) => {
    event.preventDefault();
    closePanel();
  });
};

export default { setUpContactPanel };
