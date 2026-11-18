import '../styles/main.scss';

import about from './components/about';
import skills from './components/skills';
import projects from './components/projects';
import copyEmail from './components/copyEmail';
import theme from './components/theme';
import contactPanel from './components/contactPanel';

// Share the sticky header's height with the CSS, so jumping to a section
// stops right below it. It changes when the window is resized.
const trackHeaderHeight = () => {
  const header = document.querySelector('.site-header');
  const update = () => {
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
  };
  update();
  new ResizeObserver(update).observe(header);
};

const init = () => {
  trackHeaderHeight();
  theme.setUpThemeToggle();
  contactPanel.setUpContactPanel();
  copyEmail.setUpCopyEmail();
  document.getElementById('year').textContent = new Date().getFullYear();

  // Build the sections, then honor a link like joeydev.net/#projects.
  // The browser tries to jump there before these sections are filled in,
  // so it lands in the wrong place; jump again once they're built.
  Promise.all([about.buildAbout(), skills.buildSkills(), projects.buildProjects()])
    .then(() => {
      const target = window.location.hash && document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ behavior: 'instant' });
    })
    .catch((err) => console.error('problem building sections', err));
};

init();
