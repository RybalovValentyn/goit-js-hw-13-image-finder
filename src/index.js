import './sass/main.scss';
const body = document.querySelector('body');
import API from './js/apiService';
import imagesCardHbs from './templates/imagesCard.hbs';
const debounce = require('lodash.debounce');
console.log(body);



let images = [];

body.innerHTML =
` <form class="search-form" id="search-form">
<input
  type="text"
  name="query"
  autocomplete="off"
  placeholder="Search images..."
/>
</form>
<ul class="gallery"></ul>`

const searchForm = document.querySelector('.search-form')
const inputContent = document.querySelector('.search-form input')

const imagesRef = document.querySelector('.gallery');

searchForm.addEventListener('input', debounce((onSearch),500));



// Detect when scrolled to bottom.


function loadMore() {
  
  console.log('log');
  API.fetchImages(image)
  .then(images => {renderImagesCard(images)})
  
   
} ;



function onSearch(e) {
  // 
// e.preventDefault();
console.log(inputContent);
 let image = ''; 
   
image = e.target.value;

if (image != ' '){
  console.dir('sdvsdfbgdsfb', image);
  API.fetchImages(image)
  .then(images => {renderImagesCard(images)})
    .catch(onFetchError);
   }
}


function renderImagesCard(images) {
 
  if (images.hits.length > 0) {
    clearImagesList();
     console.log('render',images.hits.length);
    imagesRef.insertAdjacentHTML('afterbegin', imagesCardHbs(images.hits));
      }
else 
{inputContent.value = 'Введите другой запрос';
setTimeout ((inputClearValue), 1000)}
};

function inputClearValue() {
  inputContent.value = '';
}

function onFetchError() {
  console.log('error');
};

function clearImagesList() {
  imagesRef.innerHTML = '';
}
