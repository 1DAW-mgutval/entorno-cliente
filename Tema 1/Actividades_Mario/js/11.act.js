'use strict'
// Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
{
    function parImpar(num) {
        if (isNaN(num)) {
            return null;
        } else {
            if (num % 2 === 0) {
                return 'par';
            } else {
                return 'impar';
            }
        }
    }

    console.log(parImpar(parseInt(9)));
}
