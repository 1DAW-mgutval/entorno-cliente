'use strict'
// Programa una función que dada una String te devuelva un Array de textos separados por
// cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']

{
    function miFuncion(cadena, separador) {
        if (typeof cadena === 'string') {
            return cadena.split(separador);
        } else {
            return null;
        }
    }

    console.log(miFuncion('hola mundo',' '));
}