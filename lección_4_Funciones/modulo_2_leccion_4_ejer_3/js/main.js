'use strict';

function priceFunction(a) {
    const price = a;
    const IVA = a * 0.21;
    const total = price + IVA;
    return `El precio sin IVA en ${price}, el IVA es ${IVA} y el total es ${total} `
}

console.log(priceFunction(10));