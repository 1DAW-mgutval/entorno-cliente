'use strict'
// Programa una función que te devuelva el texto recortado según el número de caracteres
// indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".

{
    function miFuncion(cadena, caracter) {
        if (typeof cadena === 'string') {
            return cadena.substring(0,caracter);
        } else {
            return null;
        }
    }

    console.log(miFuncion('hola mundo',4));
}