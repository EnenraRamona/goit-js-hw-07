import { galleryItems } from "./gallery-items.js";
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
    imgEl.dataset.source = item.original;
    imgEl.alt = item.description;
   

    linkEl.append(imgEl);
    liEl.append(linkEl);
    galleryContainer.append(liEl);
})

let modalInstance = null;

galleryContainer.addEventListener(`click`, (event) => {
    event.preventDefault();

    if (event.target.tagName !== 'IMG') {
        return;
    }
    const fullImage = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
        <img src="${fullImage}" alt="Full Image">
    `);
modalInstance = instance;
    instance.show();
})

 

galleryContainer.addEventListener(`keydown`, (event) => {
    if (modalInstance)
      {  if (event.key === `Escape`) {
            modalInstance.close();
            modalInstance = null;
        }}
    
});

galleryContainer.removeEventListener(`keydown`, (event));




console.log(galleryItems);


