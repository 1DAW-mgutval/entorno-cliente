"use strict"
// Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos 
// hasta introducir un número negativo y entonces mostrar el resultado.
{
    let numActual = parseInt(prompt("Introduzca un número. (negativo para finalizar)"));
    let suma = 0;
    let producto = 1;
    let contador = 0;
    while (!isNaN(numActual) && numActual >= 0) {
        if (!isNaN(numActual)) {
            suma += numActual;
            producto *= numActual;
            contador++;
            numActual = parseInt(prompt("Introduzca un número. (negativo para finalizar)"));
        } else {
            console.error("No ha introducido un número.")
        }
    }
    console.log("Suma: "+suma);
    console.log("Producto: "+producto);
    console.log("Media: "+(suma/contador));
}