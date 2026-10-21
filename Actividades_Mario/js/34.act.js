'use strict'
// Programa una función que valide que un texto sea un email válido, p.e. miFuncion
// (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
// guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
{
    function validarEmail(email) {
        if (typeof email == 'string') {
            let reg = /^[a-z0-9.-_]+@+[a-z0-9]+\.+[a-z]{2,}$/;
            return reg.test(email);
        }
        return false;
    }

    console.log('javier.ferrer@iesmartinezm.es');
    console.log(validarEmail('javier.ferrer@iesmartinezm.es'));
}