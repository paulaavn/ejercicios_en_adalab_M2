'use strict';

const page = document.querySelector("body");

function changeColor(push) {
    if (push.key === "r") {
        page.classList.add("colorR");
        page.classList.remove("colorM");
    } else if (push.key === "m") {
        page.classList.add("colorM");
        page.classList.remove("colorR");
    }
};


document.addEventListener("keydown", changeColor);



