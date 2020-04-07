const projects = [
  {
    title: 'Pinterest',
    screenshot: 'https://github.com/joeypetrone/pinterest/raw/master/images/screenshots/pins-view.png',
    description: 'This project allows users to login via Google authentication and interact with boards and pins similar to the real Pinterest.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Bootstrap, JavaScript ES6 Modules, Webpack, Firebase, Google Authentication, Version Control with Github',
    available: true,
    url: 'https://pinterest-e6336.firebaseapp.com/',
    githubUrl: 'https://github.com/joeypetrone/pinterest',
  },
  {
    title: 'Chatty Venus Fly Traps',
    screenshot: 'https://github.com/joeypetrone/chatty-venus-fly-traps/raw/master/image/chatty_ss.png',
    description: 'This is a group project, completed with three other NSS students. This project allows users to post a message to message app called "Chatty". The user can select his or her name and then type a message into an input box. When the message appears in the chat, the users name appears with a specific color, the timestamp, a like and dislike button. The user also has the option to include certain emojis in their message.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Bootstrap, JavaScript ES6 Modules, Webpack, Firebase, Version Control with Github',
    available: true,
    url: 'https://chatty-venus-fly-traps.firebaseapp.com/',
    githubUrl: 'https://github.com/joeypetrone/chatty-venus-fly-traps',
  },
  {
    title: 'Bear Watcher',
    screenshot: 'https://github.com/joeypetrone/bear-watcher/raw/master/images/screenshots/Bear-Watcher-full-page.png',
    description: 'This project is used to show javascript modules. It is designed to be a record keeping application for a bears catching fish.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Bootstrap, JavaScript ES6 Modules, Version Control with Github',
    available: true,
    url: 'https://bear-watcher-8c4d5.firebaseapp.com/',
    githubUrl: 'https://github.com/joeypetrone/bear-watcher',
  },
  {
    title: 'Dino Kennel',
    screenshot: 'https://github.com/joeypetrone/dino-kennel/raw/master/screenshots/Dino-Kennel-full-page.png',
    description: 'This project showcases all the vanilla javascript we learned in the foundations milestones. It is designed to be a record keeping application for a dinosaur kennel.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Bootstrap, Version Control with Github',
    available: true,
    url: 'https://dino-kennel.firebaseapp.com',
    githubUrl: 'https://github.com/joeypetrone/dino-kennel',
  },
  {
    title: 'Sorting Hat',
    screenshot: 'https://github.com/joeypetrone/sorting-hat/raw/master/screenshots/Sorting-Hat-01.png',
    description: 'This project is an exploration into the bootstrap grid system, buttons, and form control. I used bootstrap jumbotron to display a header introduction to the site. In the jumbotron after the introduction there is a button to join Hogwarts via Sorting Hat. When this button is clicked a bootstrap form and button print to page under the jumbotron. I gave the users the ability to type in thier name in the form and click the button to join. When the button next to the form is clicked, the users name is sent to a sorting function that assigns them to a random house which then prints a card of the user name with house and song. Within the card there is an expel button when clicked adds the user "student" to Voldermort\'s Army a new div under the new student cards. These were created by using event listeners and functions that controled print to DOM.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Bootstrap, Version Control with Github',
    available: true,
    url: 'https://sorting-hat-9b22e.firebaseapp.com/',
    githubUrl: 'https://github.com/joeypetrone/sorting-hat',
  },
  {
    title: 'Pet Adoption',
    screenshot: 'https://github.com/joeypetrone/pet-adoption/raw/master/screenshots/Pet-Adoption.png',
    description: 'This project is an exploration into how to display and filter cards on a page. I created a card from scratch to display a collection of pets (cats, dogs, and dinosaurs). I also gave our users the ability to filter the pets by cats, dogs, dinos, and all (display all cards). This page was created by passing an array of cards objects through a card builder function that then passed strings of updated html into a function that prints to DOM.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://pet-adoption-a3804.firebaseapp.com/',
    githubUrl: 'https://github.com/joeypetrone/pet-adoption',
  },
];

const getProjects = () => projects;

export default { getProjects };
