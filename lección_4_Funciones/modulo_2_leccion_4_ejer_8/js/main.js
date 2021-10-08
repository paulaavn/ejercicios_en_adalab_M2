'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
    secretLetter = 'x';
    return secretLetter;
}

console.log(secretLetter);
console.log(mySecretLetter());


//Al cambiar el orden de los console.log, el que llama a la constante deja de aplicar la función ya que no se la ha llamado todavía.
