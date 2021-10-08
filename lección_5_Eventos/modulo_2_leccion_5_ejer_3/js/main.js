'use strict';

const loremText = document.querySelector(".js_lorem");
const loremText2 = '<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos eos suscipit deleniti? Abreiciendis earum velit provident aut blanditiis? Consequatur recusandae laudantium dolorem ducimus ullam et non,ex inventore!</p>';



loremText.addEventListener('mouseover', () => {
    loremText.innerHTML += loremText2;
});

