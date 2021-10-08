'use strict';


const arr = [];
let numbers = 0;

const get100numbers = () => {
    for (let i = 0; i <= 100; i++) {
        arr.push(numbers++);
        console.log(arr[i]);
    }
};

get100numbers();
