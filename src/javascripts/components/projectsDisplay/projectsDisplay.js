import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';

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
      domString += `   <p class="card-text"><span id="boldText">Description:</span>${project.description}</p>`;
      domString += `   <p class="card-text"><span id="boldText"Technologies used:</span>${project.technologiesUsed}</p>`;
      domString += `   <p class="card-text"><span id="boldText"><i class="fas fa-window-maximize"></i></span>${project.url}</p>`;
      domString += `   <p class="card-text"><span id="boldText"><i class="fab fa-github-square"></i></span>${project.githubUrl}</p>`;
      domString += ' </div>';
      domString += ' </div>';
    }
  });

  domString += '</div>';

  utils.printToDom('projects-container', domString);
};

export default { projectsSectionBuilder };
