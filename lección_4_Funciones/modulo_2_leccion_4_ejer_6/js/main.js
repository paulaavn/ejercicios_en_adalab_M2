'use strict';

function getEl(a) {
    const element = document.querySelector(a)
    if (element === null) {
        console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`)
    } else if (element !== null) {
        return element;
    }
}



const btnEl = getEl('.section');
console.log(btnEl);


