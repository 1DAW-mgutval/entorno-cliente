"use strict"
// Programa una función que determine si un número es primo (aquel que solo es divisible por
// sí mismo y 1) o no
{
    function esPrimo(num) {
        for (let index = 2; index < num; index++) {
            if (num % index === 0) {
                return false;
            }
        }
        return true;
    }

    let num = parseInt(prompt("Número:"));
    if (!isNaN(num)) {
        if (esPrimo(num)) {
            console.log("Es primo");
        } else {
            console.log("NO es primo");
        }
    } else {
        console.error("Escriba un número");
    }
}
