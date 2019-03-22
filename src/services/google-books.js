import { create } from 'apisauce';

const api = create({
  baseURL: 'https://www.googleapis.com/books/v1',
});
const results = 20;

async function getBooks({ page = 0, search = '""' } = {}) {
  const params = {
    maxResults: results,
    projection: 'lite'
  };
  if (page === 0) {
    params.startIndex = page * results;
  }
  params.q = search;
  return await api.get('/volumes', params);
}

export { getBooks };
