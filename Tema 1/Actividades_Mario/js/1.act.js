"use strict"
// Dados dos números indicar cuál es mayor, menor o si son iguales
{
    let num1 = prompt("Número 1");
    let num2 = prompt("Número 2");
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            console.log(num1+" es mayor que "+num2);
        } else if (num2 > num1) {
            console.log(num2+" es mayor que "+num1);
        } else {
            console.log("Son iguales");
        }
    } else {
        console.error("Introduzca 2 números.");
    }
}