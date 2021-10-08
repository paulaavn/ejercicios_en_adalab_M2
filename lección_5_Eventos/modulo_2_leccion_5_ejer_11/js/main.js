'use strict';

const link1 = document.querySelector(".js_link1");
const link2 = document.querySelector(".js_link2");
const link3 = document.querySelector(".js_link3");

function stopLink(event) {
    event.preventDefault();
};

link1.addEventListener("click", stopLink);
link2.addEventListener("click", stopLink);
link3.addEventListener("click", stopLink);