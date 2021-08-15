
import API from './apiService';
const modalWIndow = document.querySelector('.js-lightbox');
const modalBtnClouse = document.querySelector('[data-action="close-lightbox"]');
const modalImg = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
let id = 0;


modalBtnClouse.addEventListener('click', clousedModalWindow);
window.addEventListener('keydown', onEscKeyPress);
overlay.addEventListener('click', clickOnBackdrop);

async function onImagesClick(evt) {   
try {
  const isImagesEl = evt.target.classList.contains('gallery__image');
  if (!isImagesEl) {
      return;
};    
  id = evt.target.id;//ссылка на текущий элемент на которий кликнули
 console.log(id);
 API.fetchImagesByID(id)
 .then(imgUrl => {renderBigImmages(imgUrl)})
 } catch (error) {
  console.log(error.stack);
}
 };

 async function renderBigImmages(imgUrl){
   try {    
    // window.removeEventListener('scroll',scrollImages);
    modalWIndow.classList.add('is-open');
    modalImg.src = imgUrl.hits[0].largeImageURL;
    
   } catch (error) {
    console.log(error.stack);
   }
 };

function clickOnBackdrop(evt) {
    if (evt.currentTarget === evt.target) {
    clousedModalWindow()
  }
}

function clousedModalWindow() {
  modalImg.src = '';
  modalWIndow.classList.remove('is-open')
};

function onEscKeyPress(evt) {

   if (evt.code === 'Escape') {
    clousedModalWindow()
 }
};

  export default {onImagesClick};

 