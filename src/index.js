import './sass/main.scss';
const body = document.querySelector('body');
import API from './js/apiService';
import imagesCardHbs from './templates/imagesCard.hbs';
import MODAL  from './js/modal';

const debounce = require('lodash.debounce');
let image = " ";
let pageNum = 1;
const insertElement = `<form class="search-form" id="search-form">
<input
  type="text"
  name="query"
  autocomplete="off"
  placeholder="Search images..."
/>
<button type="submit">submit</button>
</form>
<ul class="gallery"></ul>`
body.insertAdjacentHTML('afterbegin', insertElement)


const searchForm = document.querySelector('.search-form')
const inputContent = document.querySelector('.search-form input')
const imagesRef = document.querySelector('.gallery');

searchForm.addEventListener('submit', onSearch);

async function loadMore() {
  try {
    pageNum += 1;
  console.log('pageNum',pageNum);
  console.log('log in load more');
 await API.fetchImages(image, pageNum)
  .then(images => {renderImagesCard(images)})
  } catch (error) {
    console.log(error.stack); 
  }
  } ;

async function onSearch(e) {
  e.preventDefault();
  try {
    let image = '';   
image = inputContent.value;
console.log(image);
if (image != ' ' || '' || '  '){
  clearImagesList();
 await API.fetchImages(image)
  .then(images => {renderImagesCard(images)}).catch(onFetchError);
  return 
   }
   } catch (error) {
    console.log(error.stack);
  }
};

function renderImagesCard(images) {
   if (images.hits.length > 0) {
       console.log('render',images);
    imagesRef.insertAdjacentHTML('beforeend', imagesCardHbs(images.hits));
    document.addEventListener('DOMContentLoaded',onImageModalServis());
      }
else 
{inputContent.value = 'Введите другой запрос';
setTimeout ((inputClearValue), 1000)}
};

function inputClearValue() {
  inputContent.value = '';
}

function onFetchError() {
  console.log('error in fetch');
};

function clearImagesList() {
  pageNum = 1;
  imagesRef.innerHTML = '';
}

window.addEventListener('scroll',  debounce((scrollImages),200));

async function scrollImages() {
  try {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

     // если пользователь прокрутил достаточно далеко (< 100px до конца)
      if (windowRelativeBottom < document.documentElement.clientHeight + 400) {
       
        // добавим больше данных
        console.log('log');
       await loadMore(image, pageNum);
     
    }
  }
  catch (error) {
    console.log(error);
  }
};

async function onImageModalServis() {
   try {
   const imageContainer = document.querySelector('.gallery');
 
    imageContainer.addEventListener('click',MODAL.onImagesClick);
     }
  catch (error){
    console.log(error.stack);
    
  }
}


window.onload = function () {
  // document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    // document.body.classList.remove('loaded_hiding');
  }, 500);
}

