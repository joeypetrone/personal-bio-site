import '../styles/main.scss';

import about from './components/about';
import skills from './components/skills';
import projects from './components/projects';
import copyEmail from './components/copyEmail';

const init = () => {
  copyEmail.setUpCopyEmail();
  about.buildAbout();
  skills.buildSkills();
  projects.buildProjects();
  document.getElementById('year').textContent = new Date().getFullYear();
};

init();
