'use strict'
// Programa una función que cuente el número de caracteres de una cadena de texto, pe.
// miFunción("Hola Mundo") devolverá 10.
{
    function numCaracteres(cadena) {
        if (typeof cadena === 'string') {
            return cadena.length;
        } else {
            return null;
        }
    }

    console.log(numCaracteres('hola mundo'));
}