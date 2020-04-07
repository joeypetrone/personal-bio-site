import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projects = response.data;
      const items = [];

      if (projects) {
        Object.keys(projects).forEach((itemId) => {
          projects[itemId].id = itemId;
          items.push(projects[itemId]);
        });
      }
      resolve(items);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
