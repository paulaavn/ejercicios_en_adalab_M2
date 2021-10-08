'use strict';


const text = document.querySelector(".js_text");

const adalaber1 = {
    name: "Susana",
    age: 34,
    profesion: "periodista"
};

text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profesion}`;

const adalaber2 = {
    name: "Rocío",
    age: 25,
    profesion: "actriz"
};

text.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profesion}`;

