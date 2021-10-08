'use strict';


let ingredient = 'espinacas';

switch (ingredient) {
    case 'pollo':
        console.log('Tu ingrediente es pollo. Puedes freirte un filete con patatas');
        break;
    case 'merluza':
        console.log('Tu ingrediente es merluza. Puedes hacerte merluzita en salsa verde');
        break;
    case 'espinacas':
        console.log('Tu ingrediente es espinacas. Puedes hacerte espinacas rehogadas');
        break;
    default:
        console.log('Nada en la nevera');
}