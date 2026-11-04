'use strict'
// Programa una función que calcule el factorial de un número (El factorial de un entero positivo
// n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
// miFuncion(5) devolverá 120.
{
    function factorial(num) {
        if (isNaN(num)) {
            return null;
        } else {
            if (num === 1) {
                return 1;
            } else {
                return num*factorial(num-1);
            }
        }
    }

    console.log(factorial(5));
}