'use strict'
// Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
// Hola Mundo Hola Mundo Hola Mundo.
{
    function miFuncion(cadena, repetir) {
        if (typeof cadena === 'string' && !isNaN(repetir)) {
            return cadena.repeat(repetir);
        } else {
            return null;
        }
    }

    console.log(miFuncion('hola mundo',4));
}