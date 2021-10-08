'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const list = document.querySelector(".js_list");

list.innerHTML =
    `<li> <img src=" ${firstDogImage}"/> 
 <h1> ${firstDogName}</h1> </li>`
    + `<li> <img src=" ${secondDogImage}"/> 
    <h1> ${secondDogName}</h1> </li>` + `<li> <img src=" ${thirdDogImage}"/> 
    <h1> ${thirdDogName}</h1> </li>`;