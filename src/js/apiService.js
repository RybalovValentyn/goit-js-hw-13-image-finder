let pageNum = 1;
let perPage = 12;


function fetchImages(image) {
  pageNum += 1
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${image}&page=${pageNum}&per_page=${perPage}&key=22353010-e1640ec84a31ac5dbc2cb01be`;
    return fetch(url)
    .then(response => response.json())
    .then(images => {
      console.log(images);
      return images
       });

    
 
  }

  export default {fetchImages};