'use strict'
// Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
// Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
// del patrón.
{
    function diente(relleno, filas) {
        if (isNaN(filas)) {
            return null;
        }

        for (let i = filas; i > 0; i--) {
            let pintar = '';
            for (let j = 0; j < i; j++) {
                pintar += relleno;
            }
            console.log(pintar);
        }
    }

    diente('A',10);
}