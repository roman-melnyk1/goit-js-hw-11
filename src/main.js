import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { createGalleryItem } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');

const formSubmit = async (event) => {
  event.preventDefault();
  const loader = document.querySelector('.loader-container');
  const searchedQuery = event.currentTarget.elements.query.value.trim();

  galleryContainer.innerHTML = '';
  loader.style.display = 'block';

  if (!searchedQuery) {
    loader.style.display = 'none';
    iziToast.error({
      title: '',
      message: 'Please complete the form',
      messageColor: '#fafafb',
      icon: 'fas fa-keyboard',
      iconColor: '#fafafb',
      position: 'topRight',
      backgroundColor: '#ef4040',
      color: '#fafafb',
    });
    return;
  }

  try {
    const data = await fetchImages(searchedQuery);

    if (data.total === 0) {
      iziToast.error({
        title: '',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fafafb',
        icon: 'far fa-file-image',
        iconColor: '#fafafb',
        position: 'topRight',
        backgroundColor: '#ef4040',
        color: '#fafafb',
      });
      return;
    }

    const galleryTemplate = data.hits.map((el) => createGalleryItem(el)).join('');
    galleryContainer.innerHTML = galleryTemplate;

    const modal = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captions: true,
      captionDelay: 250,
    });
    modal.refresh();

  } catch (err) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      messageColor: '#fafafb',
      icon: 'fas fa-exclamation-triangle',
      iconColor: '#fafafb',
      position: 'topRight',
      backgroundColor: '#ef4040',
      color: '#fafafb',
    });
    console.error(err);
  } finally {
    loader.style.display = 'none';
    event.target.reset();
  }
};

form.addEventListener('submit', formSubmit);
