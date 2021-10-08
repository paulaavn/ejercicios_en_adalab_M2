'use strict';

const numbers = [3, 5, 8, 1, 22];
let acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}

console.log(`La media es: ${acc / numbers.length}`);




numbers[5] = 11;

let acc2 = 0;

for (let i = 0; i < numbers.length; i++) {
    acc2 += numbers[i];
}
console.log(`La media es: ${acc2 / numbers.length}`);


function average(numbers) {
    let acc3 = 0;
    for (let i = 0; i < numbers.length; i++) {
        acc3 += numbers[i];
    }
    console.log(`La media es ${acc3 / numbers.length}`);
}

average(numbers);