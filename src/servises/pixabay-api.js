function fetchImgPixabay(imgName, page = '1') {
  console.log('imgName', imgName);
  console.log('page', page);
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '19252909-b3fce789e9067414046d74c47';

  return fetch(`${BASE_URL}?q=${imgName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(
    response => {
      // test();
      if (response.ok) {
        return response.json();
      }
      // return Promise.reject(new Error(`Oh my god, everything is gone !!!`));
    },
  );
}

const api = {
  fetchImgPixabay,
};

export default api;
