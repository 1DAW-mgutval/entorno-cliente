'use strict'
// Programa una función que dado un array devuelva el número más alto y el más bajo de dicho 
// array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-2]
{
    function altoBajo(array) {
        if (array instanceof Array) {
            array.sort((a,b) => a-b);
            return [array[0], array[array.length-1]];
        }
        return null;
    }
    
    console.log(altoBajo([1,5,34,99,-2]));
}