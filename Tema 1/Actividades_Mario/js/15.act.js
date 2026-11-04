'use strict'
// Indica si un NIF es válido o no.
{
    function validarNIF(nif) {
        const validar = /^[0-9]{8}[A-Z]{1}$/;
        return validar.test(nif);
    }

    console.log(validarNIF('49520013R'));
}