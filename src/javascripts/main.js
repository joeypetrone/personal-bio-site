import '../styles/main.scss';
import 'bootstrap';

const projects = [
  {
    title: 'Cool Project 01',
    screenshot: 'https://designpress.com/wp-content/uploads/2011/05/photo-manipulation-21.jpg',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project 02',
    screenshot: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/12/14/campaign_images/webdr01/27-ridiculously-cool-projects-for-kids-that-adult-2-30779-1452626053-8_dblbig.jpg',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project 03',
    screenshot: 'https://re-nourish.org/wp-content/uploads/2019/12/Illustration_2_-_Design_StrategiesWEB-600x400.jpg',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project 04',
    screenshot: 'https://w88yn3okeem3ctd90lixhm8m-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/20140608_untitled_187-1-600x400-800x460.jpg',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};


const createProjectCards = () => {
  let domString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="projectsCard">';
      domString += `  <header id="projectsTitle"><h2>${project.title}</h2></header>`;
      domString += `      <section id="projectImg"><img src=${project.screenshot} alt="Image of ${project.title}"></section>`;
      domString += '      <div id="projectTextBlock">';
      domString += `          <section id="projectDesc"><span id="boldText">Description:</span> ${project.description}</section>`;
      domString += `          <section id="projectTech"><span id="boldText">Technologies used:</span> ${project.technologiesUsed}</section>`;
      domString += `          <section id="projectUrl"><span id="boldText">Website link:</span> ${project.url}</section>`;
      domString += `          <section id="projectGithubUrl"><span id="boldText">Github link:</span> ${project.githubUrl}</section>`;
      domString += '      </div>';
      domString += '</div>';
    }
  });
  printToDom('projectsPage', domString);
};

const init = () => {
  createProjectCards();
};

init();
