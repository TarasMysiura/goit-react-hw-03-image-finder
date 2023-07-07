import axios from 'axios';

const API_KEY = '36597593-1cefdef63bc4854971fb7bc7c';
const per_page = 12;


export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );
  return data;
};

// export const fetchPostDetails = async postId => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//   );
//   return data;
// };





let currentPage = 1;
let currentQuery = '';

// import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const DEBOUNCE_DELAY = 500;

// const formRef = document.querySelector('.search-form');
// const btnLoadMore = document.querySelector('.load-more');
// const galleryRef = document.querySelector('.gallery');

// btnLoadMore.addEventListener('click', onLoadMore);
// formRef.addEventListener('submit', onSearch);

// const lightbox = new SimpleLightbox('.photo-card .photo-card-link', {
//   captions: true,
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });

async function onSearch(event) {
  event.preventDefault();
  //   hideLoadMoreButton();
  //   clearGallery();

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (searchQuery === '') {
    return;
  }

  //   currentQuery = searchQuery;
  //   console.log(currentQuery);

  currentPage = 1;
  try {
    const { hits, totalHits } = await fetchImages(searchQuery, currentPage);

    console.log(hits);

    if (hits.length === 0) {
      // hideLoadMoreButton();
      clearGallery();
      showNoResultsMessage();
      return;
    }
    renderImages(hits);
    lightbox.refresh();
    console.log('totalHits', totalHits);

    if (currentPage >= totalHits / per_page) {
      showEndOfResultsMessage();
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    showSearchResults(totalHits);
  } catch (error) {
    console.error(error);
  }
}

// function renderImages(hits) {
//   const cardsMarkup = hits.map(hit => createImageCardMarkup(hit)).join('');
//   galleryRef.insertAdjacentHTML('beforeend', cardsMarkup);
// }

// function createImageCardMarkup(hit) {
//   return `
//     <div class="photo-card">
//       <a class="photo-card-link" href="${hit.largeImageURL}">
//         <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
//         <div class="info">
//           <p class="info-item">
//             <b>Likes:</b> ${hit.likes}
//           </p>
//           <p class="info-item">
//             <b>Views:</b> ${hit.views}
//           </p>
//           <p class="info-item">
//             <b>Comments:</b> ${hit.comments}
//           </p>
//           <p class="info-item">
//             <b>Downloads:</b> ${hit.downloads}
//           </p>
//         </div>
//       </a>
//     </div>
//   `;
// }

function clearGallery() {
  galleryRef.innerHTML = '';
}

// function showLoadMoreButton() {
//   btnLoadMore.classList.remove('is-hidden');
// }

// function hideLoadMoreButton() {
//   btnLoadMore.classList.add('is-hidden');
// }

// function showNoResultsMessage(totalHits) {
//   Notiflix.Notify.failure(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// function showEndOfResultsMessage() {
//   Notiflix.Notify.info(
//     "We're sorry, but you've reached the end of search results."
//   );
// }

// function showSearchResults(totalHits) {
//   Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
// }

// async function onLoadMore() {
//   currentPage += 1;

//   try {
//     const { hits, totalHits } = await fetchImages(currentQuery, currentPage);
//     if (hits.length === 0) {
//       hideLoadMoreButton();

//       return;
//     }
//     console.log(totalHits);

//     renderImages(hits);
//     lightbox.refresh();
//     if (currentPage >= totalHits / per_page) {
//       hideLoadMoreButton();
//       showEndOfResultsMessage();
//     }
//   } catch (error) {}
// }
