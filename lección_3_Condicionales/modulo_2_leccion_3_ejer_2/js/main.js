'use strict';

const text = document.querySelector(".js_text")
const myUserName = "Paula";
const accessName = "Paula";

if (accessName === myUserName) {
    text.innerHTML = ` "Bienvenida, ${myUserName}`;
} else {
    text.innerHTML = "Lo siento pero el usuario que has introducido no está registrado";
};