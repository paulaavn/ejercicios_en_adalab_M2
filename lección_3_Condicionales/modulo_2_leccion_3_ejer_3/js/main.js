'use strict';

const selectedNumber = 20000;

if (selectedNumber === 0) {
    console.log('El número es 0')
} else if (selectedNumber < 0) {
    console.log('El número es negativo')
} else if (selectedNumber >= 11 && selectedNumber <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (selectedNumber > 20 && selectedNumber < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
} else {
    console.log('el número no es 123123125')
}