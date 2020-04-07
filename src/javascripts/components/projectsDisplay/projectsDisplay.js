import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';

import './projectsDisplay.scss';

const projectsSectionBuilder = () => {
  let domString = '';
  const projects = projectsData.getProjects();

  domString += '<h3 id="projects">Projects</h3>';
  domString += '<div class="d-flex flex-wrap justify-content-center">';

  projects.forEach((project) => {
    if (project.available === true) {
      domString += ' <div class="card m-2" style="width: 20rem;">';
      domString += `<div class="card-header">${project.title}</div>`;
      domString += ` <img class="card-img-top" src="${project.screenshot}" alt="Image of ${project.title}">`;
      domString += ' <div class="card-body">';
      domString += `   <p class="card-text mb-4"><span class="font-weight-bold">Description:</span> ${project.description}</p>`;
      domString += `   <p class="card-text font-weight-bold text-center">${project.technologiesUsed}</p>`;
      domString += '   <p class="card-text font-weight-bold mb-0 text-center"><i class="fas fa-window-maximize"></i></p>';
      domString += `   <p class="card-text font-weight-bold text-center"><a class="link" target="_blank" href="${project.url}">  ${project.url}</a></<p>`;
      domString += '   <p class="card-text font-weight-bold mb-0 text-center"><i class="fab fa-github-square"></i></p>';
      domString += `   <p class="card-text font-weight-bold mb-0 text-center"><a class="link" target="_blank" href="${project.githubUrl}">  ${project.githubUrl}</a></p>`;
      domString += ' </div>';
      domString += ' </div>';
    }
  });

  domString += '</div>';

  utils.printToDom('projects-container', domString);
};

export default { projectsSectionBuilder };
