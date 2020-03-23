import bioDisplay from './components/bioDisplay/bioDisplay';
import techDisplay from './components/techDisplay/techDisplay';
import projectsDisplay from './components/projectsDisplay/projectsDisplay';

import '../styles/main.scss';
import 'bootstrap';

const bioLoader = () => {
  $('#bio-container').removeClass('hide');

  $('#tech-container').addClass('hide');
  $('#projects-container').addClass('hide');
};

const techLoader = () => {
  $('#tech-container').removeClass('hide');

  $('#bio-container').addClass('hide');
  $('#projects-container').addClass('hide');
};

const projectsLoader = () => {
  $('#projects-container').removeClass('hide');

  $('#bio-container').addClass('hide');
  $('#tech-container').addClass('hide');
};

const init = () => {
  $('body').on('click', '#tech-button', techLoader);
  $('body').on('click', '#projects-button', projectsLoader);
  $('body').on('click', '#bio-button', bioLoader);
  bioDisplay.bioSectionBuilder();
  techDisplay.techSectionBuilder();
  projectsDisplay.projectsSectionBuilder();
};

init();
