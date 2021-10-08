'use strict';


const text1 = document.querySelector(".js_text1");
const text2 = document.querySelector(".js_text2");

const adalaber1 = {
    name: "Susana",
    age: 34,
    profesion: "periodista",
    showBio: function () {
        return "Mi nombre es " + this.name + ", tengo " + this.age + " años y soy " + this.profesion;
    }
};

text1.innerHTML = adalaber1.showBio();



const adalaber2 = {
    name: "Rocío",
    age: 25,
    profesion: "actriz",
    showBio: function () {
        return "Mi nombre es " + this.name + ", tengo " + this.age + " años y soy " + this.profesion;
    }
};
text2.innerHTML = adalaber2.showBio();

