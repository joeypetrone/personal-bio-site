import techData from '../../helpers/data/techData';
import utils from '../../helpers/utils';

const techSectionBuilder = () => {
  techData.getTech()
    .then((tools) => {
      let domString = '';

      domString += '<div class="pages" id="technologiesPage">';
      domString += '<h3 class="mb-4">Technologies</h3>';
      domString += '<ul>';

      tools.forEach((technology) => {
        domString += `<li class="mb-4">${technology.name}</li>`;
      });
      domString += '</ul>';
      domString += '</div>';

      utils.printToDom('tech-container', domString);
    })
    .catch((err) => console.error('problem with get technology', err));
};

export default { techSectionBuilder };
