console.log('hello!')

const bearsPictures = [
  "https://placebear.com/500/279",
  "https://placebear.com/500/280",
  "https://placebear.com/500/300",
  "https://placebear.com/500/302",
  "https://placebear.com/500/305"
];
// We create a variable set to the array with all element that match the selector img
const images = document.querySelectorAll('img');

// We loop as many time as we have img elements
for(let i = 0; i < images.length; i++){

  // For each loop turn we change the current image for the corresponding image in the array
  images[i].src = bearsPictures[i];

}