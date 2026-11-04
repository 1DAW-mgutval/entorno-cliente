'use strict'
// Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
// miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
{
    function eliminarPatron(cadena, patron) {
        if (typeof cadena === 'string' && typeof patron === 'string') {
            let array = cadena.split(patron);
            let res = '';
            for (const elem of array) {
                res +=elem;
            }
            return res;
        }
    }

    console.log(eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz'));
}