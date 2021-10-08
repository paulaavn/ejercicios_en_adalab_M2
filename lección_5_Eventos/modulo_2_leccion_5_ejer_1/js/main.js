'use strict';
"use strict";

const text = document.querySelector(".js_text");
const button = document.querySelector(".js_button");

// function changeText() {
//     text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
// }

// button.addEventListener('click', changeText);

button.addEventListener('click', () => text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!");