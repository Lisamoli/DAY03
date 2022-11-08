console.log('hello!')

// We create a variable secondCard set to the second-card DOM node
const secondCard = document.querySelector('.second-card');

// We create a variable secondCat set too a new DOM element 'img'
const secondCat = document.createElement('img');

// We add the src attribute
secondCat.src = "https://placekitten.com/408/287";

// We add the secondCat to the secondCard
secondCard.appendChild(secondCat);