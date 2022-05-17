import * as functions from 'firebase-functions';
const fetch = require('node-fetch');

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

// dog api calls

// get breeds
export const get_breeds = functions.https.onRequest(async (request, response) => {
  const fetchRes = await fetch('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'x-api-key': 'ea11f47f-f968-40df-95c3-581cf457091c',
    },
  });
  const data = await fetchRes.json();
  response.send(data);
});

// search breed
export const search_breed = functions.https.onRequest(async (request, response) => {
  console.log(request);
  const fetchRes = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${request.query['breed']}`, {
    headers: {
      'x-api-key': 'ea11f47f-f968-40df-95c3-581cf457091c',
    },
  });
  const data = await fetchRes.json();
  response.send(data);
});

// wiki desc
//https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=German%20Shepherd

// random dog fact
export const get_random_fact = functions.https.onRequest(async (request, response) => {
  const fetchRes = await fetch('https://dog-api.kinduff.com/api/facts');
  const data = await fetchRes.json();
  response.send(data);
});

// wiki dog info
export const get_breed_wiki = functions.https.onRequest(async (request, response) => {
  const fetchRes = await fetch(
    `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${request.query['breed']}`
  );
  const data = await fetchRes.json();
  response.send(data);
});
