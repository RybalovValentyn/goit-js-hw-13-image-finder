function fetchCountries(country) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${country}&page=1&per_page=20&key=22353010-e1640ec84a31ac5dbc2cb01be`;
    return fetch(url)
    .then(response => response.json())
    .then(console.log);
         
      return countries
   
  
  }

  export default {fetchCountries};