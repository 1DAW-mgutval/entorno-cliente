'use strict'
// Programa una función que devuelva el monto final después de aplicar un descuento a una
// cantidad dada, pe. miFuncion(1000, 20) devolverá 800
{
    function descueto(precio, descuento) {
        if (isNaN(precio) || isNaN(descuento)) {
            return null;
        } else {
            return precio*((100-descuento)/100);
        }
    }

    console.log(descueto(1000,20));
}