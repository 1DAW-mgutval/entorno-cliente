'use strict'
// Programa una función que dado un array devuelva el número más alto y el más bajo de dicho 
// array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-2]
{
    function altoBajo(array) {
        if (array instanceof Array) {
            let copia = [...array].sort((a,b) => a-b);
            return [copia[0], copia[copia.length-1]];
        }
        return null;
    }
    
    console.log(altoBajo([1,5,34,99,-2]));
}