import projectsData from '../helpers/data/projectsData';
import utils from '../helpers/utils';

const { escapeHtml, icon } = utils;

// The picture at the top of a card. Without a screenshot, show the title instead.
const cardImage = (project) => {
  if (!project.screenshot) {
    return `<div class="project-image placeholder" aria-hidden="true">${escapeHtml(project.title)}</div>`;
  }
  return `<img class="project-image" src="${escapeHtml(project.screenshot)}" alt="Screenshot of ${escapeHtml(project.title)}" width="640" height="400" loading="lazy">`;
};

// "Live site" and "Code" links. Each one only shows when its URL is filled in.
const cardLinks = (project) => {
  const links = [];
  if (project.url) {
    links.push(`<a href="${escapeHtml(project.url)}" target="_blank" rel="noopener">Live site ${icon('external')}</a>`);
  }
  if (project.githubUrl) {
    links.push(`<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener">${icon('github')} Code</a>`);
  }
  return links.length ? `<div class="project-links">${links.join('')}</div>` : '';
};

const projectCard = (project) => {
  const badge = project.status ? ` <span class="badge">${escapeHtml(project.status)}</span>` : '';
  const techChips = project.technologiesUsed
    .split(',')
    .map((tech) => `<li class="chip small">${escapeHtml(tech.trim())}</li>`)
    .join('');

  return `
    <article class="project-card">
      ${cardImage(project)}
      <div class="project-body">
        <h3>${escapeHtml(project.title)}${badge}</h3>
        <p>${escapeHtml(project.description)}</p>
        <ul class="chips">${techChips}</ul>
        ${cardLinks(project)}
      </div>
    </article>`;
};

// One card per project in db/projects.json that has "available": true.
const buildProjects = () => projectsData.getProjects().then((projects) => {
  const html = projects
    .filter((project) => project.available === true)
    .map(projectCard)
    .join('');

  utils.printToDom('projects-list', html);
});

export default { buildProjects };
