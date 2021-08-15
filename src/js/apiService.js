
let perPage = 22;


function fetchImages(image, pageNum ) {
  
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${image}&page=${pageNum}&per_page=${perPage}&key=22353010-e1640ec84a31ac5dbc2cb01be`;
   console.log(url);
    return fetch(url)
    .then(response => response.json())
    .then(images => {
      console.log(images);
      return images
       });  
//  console.log(images);
  }

  function fetchImagesByID(id ) {
  
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&id=${id}&key=22353010-e1640ec84a31ac5dbc2cb01be`;
   console.log(url);
    return fetch(url)
    .then(response => response.json())
    .then(images => {
      console.log(images);
      return images
       });  
  };
 
 
  export default {fetchImages,fetchImagesByID};

