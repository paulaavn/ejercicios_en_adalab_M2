'use strict';
const myAge = document.querySelector(".js_age");
const myAge2 = parseInt(myAge.innerHTML);
const hourPerDay = 24;
const daysPerYear = 365.25;
const totalHours = myAge2 * hourPerDay * daysPerYear;

console.log(totalHours);


myAge.innerHTML = `He vivido un total de ${totalHours} horas`;