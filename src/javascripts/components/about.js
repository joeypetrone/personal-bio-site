import bioData from '../helpers/data/bioData';
import utils from '../helpers/utils';

// One small card per entry in db/bio.json.
const buildAbout = () => bioData.getBio().then((entries) => {
  const html = entries.map((entry) => `
    <article class="about-item">
      <h3>${utils.escapeHtml(entry.question)}</h3>
      <p>${utils.escapeHtml(entry.answer)}</p>
    </article>`).join('');

  utils.printToDom('about-list', html);
});

export default { buildAbout };
