"use strict"
// Mostrar todos los números divisores de un número introducido por el usuario.
{
    let num = parseInt(prompt("Número:"));

    if (!isNaN(num)) {
            for (let index = 1; index <= num; index++) {
                if (num % index === 0) {
                    console.log(index);
                }
            }
    } else {
        console.error("Introduzca un número.")
    }
}