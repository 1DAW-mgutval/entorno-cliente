'use strict'
// Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
// Mundo") devolverá "odnuM aloH".
{
    function invertirPalabra(palabra) {
        let res = '';
        if (typeof palabra === 'string') {
            for (let index = palabra.length-1; index >= 0; index--) {
                res += palabra.charAt(index);
            }
        }
        return res;
    }

    let palabra = 'hola mundo';
    console.log(invertirPalabra(palabra));
}