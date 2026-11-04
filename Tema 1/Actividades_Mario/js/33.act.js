'use strict'
// Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
// Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como ¡ o ¿

{
    function validarNombre(nombre) {
        if (typeof nombre == 'string') {
            let reg = /^[A-Z][a-zA-Z]*$/;
            return reg.test(nombre.replace(' ', ''));
        }
        return false;
    }

    console.log(validarNombre('Javier Ferrer'));
}