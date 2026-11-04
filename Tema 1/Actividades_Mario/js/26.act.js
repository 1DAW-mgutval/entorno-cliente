'use strict'
// Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
// “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.
{
    let regInicio = /^[m|d]/;
    let regFin= /[a|o]$/;

    let cadena = 'dislexico';
    if (cadena.match(regInicio) && cadena.match(regFin)) {
        console.log('coincide');
    } else {
        console.log('no coincide');
    }
}