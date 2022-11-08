console.log('hello!')

// We create a variable set to the array with all element that match the selector img-dog

const dogs = document.querySelectorAll(".img-dog");

// We loop as many time as we have img-dog elements

for (let i = 0; i < dogs.length; i++) {  

// For each loop turn we remove the current dog image  

dogs[i].remove();
}