'use strict';

const buttons = document.querySelectorAll(".js_button");
const body = document.querySelector(".js_body");



function handleClick() {
    body.classList.toggle("colorRed");
};

for (const button of buttons) {
    button.addEventListener("click", handleClick);
};



