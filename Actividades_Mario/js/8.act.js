"use strict"
// Mostrar la tabla de multiplicar de un número introducido por pantalla.
{
    let num = parseInt(prompt("Número:"));

    if (!isNaN(num)) {
            for (let index = 0; index <= num; index++) {
                console.log(index+"x"+num+" = "+(index*num));
            }
    } else {
        console.error("Introduzca un número.")
    }
}