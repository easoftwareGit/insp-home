const API_URL = 'https://quotes.rest/qod?language=en';

// see responce_xxxxx.json for json format
// only want the quote and author
// they are found under the parent json.contents.quotes[] array. 
// only need the first quote at index 0, json.contents.quotes[0]

const getQuoteApi = async () => {
  const responce = await fetch(API_URL);
  const json = await responce.json();
  const quoteData = json.contents.quotes[0];

  return {
    quote: quoteData.quote,
    author: quoteData.author
  };
}

export default getQuoteApi;