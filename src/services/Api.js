import axios from 'axios';

const API_KEY = '36597593-1cefdef63bc4854971fb7bc7c';
const per_page = 12;


export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    // `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
    // `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );
  console.log(data);
  return data;
};

