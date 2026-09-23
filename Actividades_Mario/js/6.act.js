"use strict"
// Mostrar todos los números impares que hay entre dos números introducidos por el usuario.
{
    function mayor(num1, num2) {
        if(num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }

    function menor(num1, num2) {
        if(num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    }

    let num1 = parseInt(prompt("Número 1:"));
    let num2 = parseInt(prompt("Número 2:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 === num2) {
            console.log("Son iguales")
        } else {
            let numMayor = mayor(num1, num2);
            let numMenor = menor(num1, num2);
            for (let index = numMenor; index <= numMayor; index++) {
                if (index % 2 === 1) {
                    console.log(index);
                }
            }
        }
    } else {
        console.error("Introduzca 2 números.")
    }
}