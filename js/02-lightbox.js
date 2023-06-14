import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);


galleryItems.forEach(item => {
    const liEl = document.createElement(`li`);
    liEl.classList.add(`gallery__item`);

    const linkEl = document.createElement(`a`);
    linkEl.classList.add(`gallery__link`);
    linkEl.href = item.original;


    const imgEl = document.createElement(`img`);
    imgEl.classList.add(`gallery__image`);
    imgEl.src = item.preview;
    imgEl.alt = item.description;
   

    linkEl.append(imgEl);
    liEl.append(linkEl);
    galleryContainer.append(liEl);
})

document.addEventListener(`DOMContentLoaded`, function () {
    new SimpleLightbox('.gallery a', {
        captionsData: `alt`,
        captionDelay: 250,
      });
})

console.log(galleryItems);
