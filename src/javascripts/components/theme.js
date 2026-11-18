// Light/dark switch. With no choice saved, the page follows the device setting.
// Clicking sets data-theme on <html> (the CSS reads it) and remembers the choice.

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = () => document.documentElement.dataset.theme || (darkQuery.matches ? 'dark' : 'light');

const setUpThemeToggle = () => {
  const toggle = document.querySelector('.theme-toggle');

  // Tell screen readers whether the switch is on (dark) or off (light).
  const updateSwitch = () => {
    toggle.setAttribute('aria-checked', String(currentTheme() === 'dark'));
  };

  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    updateSwitch();
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Storage blocked (private window etc.): the switch still works for this visit.
    }
  });

  // If the visitor changes their device setting while the page is open, keep the switch in sync.
  darkQuery.addEventListener('change', updateSwitch);
  updateSwitch();
};

export default { setUpThemeToggle };
