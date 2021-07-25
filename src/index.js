import './sass/main.scss';
const body = document.querySelector('body');
import API from './js/apiService'
console.log(body);

body.innerHTML =
` <form class="search-form" id="search-form">
<input
  type="text"
  name="query"
  autocomplete="off"
  placeholder="Search images..."
/>
</form>`
// let country = '';
const searchForm = document.querySelector('.search-form')
// console.log(searchForm);

searchForm.addEventListener('input', onSearch);

function onSearch(e) {
    // e.preventDefault();
    let country = ''; 
   
country = e.target.value;

console.log('sdvsdfbgdsfb', country);

API.fetchCountries(country)
return country
}

