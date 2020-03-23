import techData from '../../helpers/data/techData';
import utils from '../../helpers/utils';

const techSectionBuilder = () => {
  let domString = '';
  const technologies = techData.getTech();

  domString += '<div class="pages" id="technologiesPage">';
  domString += '<h3>Technologies</h3>';
  domString += '<ul>';
  technologies.forEach((technology) => {
    domString += `<li>${technology.name}</li>`;
  });
  domString += '</ul>';
  domString += '</div>';

  utils.printToDom('tech-container', domString);
};

export default { techSectionBuilder };
