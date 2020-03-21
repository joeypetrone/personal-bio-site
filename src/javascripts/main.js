const projects = [
    {
        title: "Cool Project 01", 
        screenshot: "https://designpress.com/wp-content/uploads/2011/05/photo-manipulation-21.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 02", 
        screenshot: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/12/14/campaign_images/webdr01/27-ridiculously-cool-projects-for-kids-that-adult-2-30779-1452626053-8_dblbig.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 03", 
        screenshot: "https://re-nourish.org/wp-content/uploads/2019/12/Illustration_2_-_Design_StrategiesWEB-600x400.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 04", 
        screenshot: "https://w88yn3okeem3ctd90lixhm8m-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/20140608_untitled_187-1-600x400-800x460.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            domString += `<div class="projectsCard">`;
            domString += `  <header id="projectsTitle"><h2>${projects[i].title}</h2></header>`;
            domString += `      <section id="projectImg"><img src=${projects[i].screenshot} alt="Image of ${projects[i].title}"></section>`;
            domString += `      <div id="projectTextBlock">`;
            domString += `          <section id="projectDesc"><span id="boldText">Description:</span> ${projects[i].description}</section>`;
            domString += `          <section id="projectTech"><span id="boldText">Technologies used:</span> ${projects[i].technologiesUsed}</section>`;
            domString += `          <section id="projectUrl"><span id="boldText">Website link:</span> ${projects[i].url}</section>`;
            domString += `          <section id="projectGithubUrl"><span id="boldText">Github link:</span> ${projects[i].githubUrl}</section>`;
            domString += `      </div>`;
            domString += `  </div>`;
        } 
    }
    printToDom('projectsPage', domString);
};

const init = () => {
    createProjectCards();
};

init();
