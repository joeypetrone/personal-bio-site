import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tech.json`)
    .then((response) => {
      const tech = response.data;
      const tools = [];

      if (tech) {
        Object.keys(tech).forEach((toolId) => {
          tech[toolId].id = toolId;
          tools.push(tech[toolId]);
        });
      }
      resolve(tools);
    })
    .catch((err) => reject(err));
});

export default { getTech };
