'use strict';

function getRandomDogs(n) {
  fetch('https://dog.ceo/api/breeds/image/random/'+n)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(array) {
  console.log(array);
  for(let i=0; i<array.length; i++){
    $('.js-dog-list').append(`<li> <img src='${array[i]}'>`);
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let n = $('.js-get-number').val();
    getRandomDogs(n);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});