'use strict'
// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
// primero almacena los números pares y en el segundo los impares, pe.
// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
{
    function separarParesImpares(array) {
        if (array instanceof Array) {
            let res = {
                pares:[],
                impares:[]
            }
            array.forEach(number => {
                if (typeof number == 'number') {
                    if (number%2==0) {
                        res.pares[res.pares.length] = number;
                    } else {
                        res.impares[res.impares.length] = number;
                    }
                } else {
                    return null;
                }
            });
            return res;
        }
        return null;
    }

    console.log(separarParesImpares([1,2,3,4,5,6,7,8,9,0]));
}