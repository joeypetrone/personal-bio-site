import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';

import './projectsDisplay.scss';

// One link row (icon + link). Returns nothing when the URL is empty.
const linkRow = (iconClass, url) => {
  if (!url) return '';
  let row = `   <p class="card-text font-weight-bold mb-0 text-center"><i class="${iconClass}"></i></p>`;
  row += `   <p class="card-text font-weight-bold text-center"><a class="link" target="_blank" rel="noopener" href="${url}">${url}</a></p>`;
  return row;
};

const projectsSectionBuilder = () => {
  projectsData.getProjects()
    .then((items) => {
      let domString = '';

      domString += '<h3 id="projects">Projects</h3>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';

      items.forEach((project) => {
        if (project.available === true) {
          const badge = project.status ? ` <span class="badge badge-info ml-1">${project.status}</span>` : '';
          domString += ' <div class="card m-2" style="width: 20rem;">';
          domString += `<div class="card-header">${project.title}${badge}</div>`;
          if (project.screenshot) {
            domString += ` <img class="card-img-top" src="${project.screenshot}" alt="Image of ${project.title}">`;
          }
          domString += ' <div class="card-body">';
          domString += `   <p class="card-text mb-4"><span class="font-weight-bold">Description:</span> ${project.description}</p>`;
          domString += `   <p class="card-text font-weight-bold text-center">${project.technologiesUsed}</p>`;
          domString += linkRow('fas fa-window-maximize', project.url);
          domString += linkRow('fab fa-github-square', project.githubUrl);
          domString += ' </div>';
          domString += ' </div>';
        }
      });

      domString += '</div>';

      utils.printToDom('projects-container', domString);
    })
    .catch((err) => console.error('problem with get projects', err));
};

export default { projectsSectionBuilder };
