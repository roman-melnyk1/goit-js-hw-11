export const fetchImages = (searchedQuery) => {
  const params = new URLSearchParams({
    key: '48414882-2ceb04708685b14a14771b53a',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
};



