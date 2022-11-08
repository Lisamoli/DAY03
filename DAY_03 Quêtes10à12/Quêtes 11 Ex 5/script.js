console.log('hello!')

// We create a variable thirdBox set to new div element
const thirdBox = document.createElement("div");

// We add to the element a class box
thirdBox.classList.add("box");

// We create a variable containerBox set to the DOM node .container-boxes
const containerBox = document.querySelector(".container-boxes");

// We add the containerBox to the thirdBox
containerBox.appendChild(thirdBox);