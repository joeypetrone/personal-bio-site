import '../styles/main.scss';

import about from './components/about';
import skills from './components/skills';
import projects from './components/projects';

const init = () => {
  about.buildAbout();
  skills.buildSkills();
  projects.buildProjects();
  document.getElementById('year').textContent = new Date().getFullYear();
};

init();
