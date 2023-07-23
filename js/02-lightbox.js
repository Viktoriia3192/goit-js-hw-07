import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}

function renderGallery() {
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
}

renderGallery();

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});

