'use strict';

const promos = [
    {
        promo: 'A',
        name: 'Ada',
        students: [
            {
                id: 'id-1',
                name: 'Sofía',
                age: 20
            },
            {
                id: 'id-2',
                name: 'María',
                age: 21
            },
            {
                id: 'id-3',
                name: 'Lucía',
                age: 22
            }
        ]
    },
    {
        promo: 'B',
        name: 'Borg',
        students: [
            {
                id: 'id-4',
                name: 'Julia',
                age: 23
            },
            {
                id: 'id-5',
                name: 'Tania',
                age: 24
            },
            {
                id: 'id-6',
                name: 'Alaia',
                age: 25
            }
        ]
    },
    {
        promo: 'C',
        name: 'Clarke',
        students: [
            {
                id: 'id-7',
                name: 'Lidia',
                age: 26
            },
            {
                id: 'id-8',
                name: 'Celia',
                age: 27
            },
            {
                id: 'id-9',
                name: 'Nadia',
                age: 28
            }
        ]
    }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// const result = document.querySelector(".js-result");

// for (const promo of promos) {
//     result.innerHTML += `<ul><li>${promo.name}</li></ul>`
// };

// const result2 = document.querySelector(".js-result");

// for (const promoName of promos) {
//     result2.innerHTML += `<ul><li><p>Nombre:${promoName.name}</p><p>Promo: ${promoName.promo}</p></li></ul>`
// };

// const result3 = document.querySelector(".js-result");

// for (const promoName of promos) {
//     result3.innerHTML += `<ul><li><p>Nombre: ${promoName.name}</p><p>Promo: ${promoName.promo}</p><p>Nº de alumnas: ${promoName.students.length}</p></li></ul>`
// };


const result4 = document.querySelector(".js-result");

for (const promoName of promos) {
    result4.innerHTML += `<ul><li><p>Nombre: ${promoName.name}</p></li></ul>`
    console.log(promoName.students.name)
}


