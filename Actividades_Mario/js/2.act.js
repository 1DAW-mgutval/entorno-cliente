"use strict"
// Modifica el programa anterior: si los números no son un número o son menores o iguales a ceros, que los vuelva a pedir.
{
    let num1, num2;
    do {
        num1 = prompt("Introduzca el primer número. Mayor que 0");
        num2 = prompt("Introduzca el segundo número. Mayor que 0");
    } while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            console.log(num1 + " es mayor que " + num2);
        } else if (num2 > num1) {
            console.log(num2 + " es mayor que " + num1);
        } else {
            console.log("Son iguales");
        }
    } else {
        console.error("Introduzca 2 números.");
    }
}