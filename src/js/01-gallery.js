// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `)
  .join("");

galleryElement.insertAdjacentHTML("beforeend", galleryList);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});