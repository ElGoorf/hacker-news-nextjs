import qs from 'qs';

// Generate URLS

const baseUrl = 'https://hn.algolia.com/api/v1';

export const generateSearchUrl = (query, page, hitsPerPage) => {
  const params = qs.stringify({
    query, page, hitsPerPage, tags: 'story',
  });

  return `${baseUrl}/search?${params}`;
};

export const generateItemUrl = (itemId) => `${baseUrl}/items/${itemId}`;

// Fetch data

export const fetchSearchResults = async (query, page, hitsPerPage) => {
  const res = await fetch(generateSearchUrl(query, page, hitsPerPage));
  // const res = await fetch('https://hn.algolia.com/api/v1/search');
  const results = await res.json();

  return results;
};

export const fetchItem = async (itemId) => {
  const res = await fetch(generateItemUrl(itemId));
  const data = await res.json();

  return data;
};
