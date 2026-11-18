import techData from '../helpers/data/techData';
import utils from '../helpers/utils';

// One chip per entry in db/tech.json.
const buildSkills = () => techData.getTech().then((skills) => {
  const html = skills
    .map((skill) => `<li class="chip">${utils.escapeHtml(skill.name)}</li>`)
    .join('');

  utils.printToDom('skills-list', html);
});

export default { buildSkills };
