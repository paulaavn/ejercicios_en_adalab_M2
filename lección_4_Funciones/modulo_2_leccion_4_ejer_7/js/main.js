'use strict';

// Usamos la función para acceder al párrafo
function getEl(a) {
    return document.querySelector(a);
}

//accedemos al valor con inner HTML
const getNumber = getEl('.js_number').innerHTML;
console.log(getNumber);

//lo convertimos a número
const selectedNumber = parseInt(getNumber);

//Usamos la función para saber si es par o impar
function par(b) {
    if ((b % 2) === 0) {
        console.log("Éste número es par");
    } else {
        console.log("Éste número es impar");
    }
}

par(selectedNumber);
