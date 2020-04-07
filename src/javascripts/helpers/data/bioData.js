import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBio = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/bio.json`)
    .then((response) => {
      const bio = response.data;
      const entries = [];

      if (bio) {
        Object.keys(bio).forEach((entryId) => {
          bio[entryId].id = entryId;
          entries.push(bio[entryId]);
        });
      }
      resolve(entries);
    })
    .catch((err) => reject(err));
});

export default { getBio };
