'use strict';

const button1 = document.querySelector(".js_button1");
const button2 = document.querySelector(".js_button2");

const handleColor = () => {
    event.currentTarget.classList.toggle("button2");
};

button1.addEventListener("click", handleColor);
button2.addEventListener("click", handleColor);



