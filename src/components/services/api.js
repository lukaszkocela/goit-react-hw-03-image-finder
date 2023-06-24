import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '35824715-2d66b768577de707402fcf159';

export const fetchQuery = async (searchValue, page) => {
  const response = await axios.get(API_URL, {
    params: {
      key: API_KEY,
      q: searchValue,
      page: page,
      per_page: 12,
    },
  });

  return response.data.hits;
};
