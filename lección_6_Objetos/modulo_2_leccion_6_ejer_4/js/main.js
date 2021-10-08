'use strict';


const button = document.querySelector(".js_button");

function selectButton() {
    button.classList.toggle("button_selected");
    console.log(event);
    console.log(event.type); //propiedad
};

button.addEventListener("click", selectButton);

