import bioData from '../../helpers/data/bioData';
import utils from '../../helpers/utils';

const bioSectionBuilder = () => {
  bioData.getBio()
    .then((bio) => {
      let domString = '';

      domString += '<h3 class="mb-4">Bio</h3>';

      bio.forEach((entry) => {
        domString += `<h4 class="p-2">${entry.question}</h4>`;
        domString += `<p class="p-2 mb-4">${entry.answer}</p>`;
      });

      utils.printToDom('bio-container', domString);
    })
    .catch((err) => console.error('problem with get bio', err));
};

export default { bioSectionBuilder };
