import bioData from '../../helpers/data/bioData';
import utils from '../../helpers/utils';

const bioSectionBuilder = () => {
  let domString = '';
  const bio = bioData.getBio();

  domString += '<h3>Bio</h3>';

  bio.forEach((entry) => {
    domString += `<h4>${entry.question}</h4>`;
    domString += `<p>${entry.answer}</p>`;
  });

  utils.printToDom('bio-container', domString);
};

export default { bioSectionBuilder };
