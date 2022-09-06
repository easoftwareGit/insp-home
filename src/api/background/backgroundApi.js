import { upsplashApiKey } from '../apiKeys';
const API_URL = `https://api.unsplash.com/search/photos/?query=berkeley&page=1&orientation=landscape&client_id=${upsplashApiKey}`;
// query=____ is the search query for photos
// page=1 is for 1 page of photos
// orientation=landscape is for landscape orientated images only
// cliend_id=____ is the api key for this app

const getImageApi = async () => {
  const responce = await fetch(API_URL);
  const json = await responce.json();

  // return just the full urls of the images
  return json.results.map((result) => result.urls.full);
}

export default getImageApi;