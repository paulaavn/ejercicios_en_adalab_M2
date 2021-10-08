'use strict';

let inputText = document.querySelector(".js_input");
const button = document.querySelector(".js_button");

button.addEventListener('click', () => console.log(`Hola ${inputText.value}`));

