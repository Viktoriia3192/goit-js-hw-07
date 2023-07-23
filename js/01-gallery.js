// Добавим экспортируемый массив с данными галереи
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

// Функция для создания HTML элемента галереи
function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}

// Функция для рендеринга элементов галереи
function renderGallery() {
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
}

// Функция для открытия модального окна с полноразмерным изображением
function openModal(url) {
  const instance = basicLightbox.create(`<img src="${url}" alt="Image">`, {
    onShow: (instance) => {
      document.body.classList.add('modal-open');
      instance.element().querySelector('img').focus();
    },
    onClose: () => {
      document.body.classList.remove('modal-open');
    },
  });

  instance.show();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}

function handleGalleryClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const largeImageUrl = target.dataset.source;
    openModal(largeImageUrl);
  }
}

galleryList.addEventListener('click', handleGalleryClick);

renderGallery();
