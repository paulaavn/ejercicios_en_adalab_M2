'use strict';

const numbers = [];
let num = 0;

function getReversed100Numbers() {
    for (let i = 0; i < 100; i++) {
        numbers.push(num + 1);
        num++;
    }
    numbers.reverse();

    for (let i = 0; i < 100; i++) {
        console.log(numbers[i]);
    }
}

getReversed100Numbers()




