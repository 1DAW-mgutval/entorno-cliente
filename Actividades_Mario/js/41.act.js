'use strict'
// . Programa una función que obtenga un numero aleatorio entre 501 y 600.
{
    function obtenerNumeroAleatorio() {
        return Math.floor(Math.random() * (601-501) + 501);
    }

    console.log(obtenerNumeroAleatorio());
}