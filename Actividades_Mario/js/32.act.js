'use strict'
// Programa una función que dada una cadena de texto cuente el número de vocales y
// consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
{
    function numVocalesConsonantes(cadena) {
        if (typeof cadena == 'string') {
            let numVocales = cadena.split('').filter(caracter => new RegExp('[aeiouáéíóúäëïöü]','i').test(caracter)).map(caracter => caracter = 1).reduce((a,v) => a+v);
            let numConsonantes = cadena.split('').filter(caracter => new RegExp('[bcdfghjklmnñpqrstvwxyz]','i').test(caracter)).map(caracter => caracter = 1).reduce((a,v) => a+v);
            return 'Vocales: '+numVocales+', Consonantes: '+numConsonantes;
        } else {
            return null;
        }
    }
    console.log(numVocalesConsonantes('hola mundo'));
}