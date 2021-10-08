'use strict';


const totalPeople = 9;
const totalPrice = 128;
const sakePrice = 2;


const pricePerPerson = (totalPrice - sakePrice) / totalPeople;
const anaPrice = pricePerPerson + sakePrice;

console.log("Cada una debe pagar " + pricePerPerson + "€");
console.log("Ana debe pagar " + anaPrice + "€");