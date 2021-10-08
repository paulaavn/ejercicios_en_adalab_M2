'use strict';

let myAge = 2;

if (myAge === 1) {
    console.log(`Tienes ${15} años perrunos`);
} else if (myAge > 1 && myAge <= 2) {
    console.log(`Tienes ${15 + 9} años perrunos`);
} else if (myAge >= 3) {
    console.log(`Tienes ${15 + 9 + (myAge - 3) * 5} años perrunos`)
} else {
    console.log(`Tu no eres un perro`)
}