'use strict';

const inputText = document.querySelector(".js_input");
const paragraphText = document.querySelector(".js_text");


// const handleText = (event) => {
//     paragraphText.innerHTML = event.currentTarget.value;
//     ;
// }

// inputText.addEventListener("keyup", handleText);



inputText.addEventListener('keyup', (event) => {
    paragraphText.innerHTML = event.currentTarget.value;
});