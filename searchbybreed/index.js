'use strict';

function getRandomDogs(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(dogURL) {
  console.log(dogURL);
  $('.results-img').replaceWith(
    `<img src='${dogURL}' class='results-img'>`
  );
  
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('.js-get-breed').val();
    getRandomDogs(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});