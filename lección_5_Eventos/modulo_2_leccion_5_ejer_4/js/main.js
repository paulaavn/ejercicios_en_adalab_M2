'use strict';


const divScroll = document.querySelector(".js_scroll");

function changeColor() {

    if (window.scrollY >= 250) {
        divScroll.classList.remove("green");
        divScroll.classList.add("pink");
    } else if (window.scrollY < 250) {
        divScroll.classList.remove("pink");
        divScroll.classList.add("blue");
    }
};



window.addEventListener('scroll', changeColor);

