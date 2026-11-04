'use strict'
// Programa una función que dado un array numérico devuelve otro array con los números
// elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
{
    function elevarCuadrado(array) {
        if (array instanceof Array) {
            array.forEach((numero, indice) => {
                if (typeof numero == 'number') {
                    array[indice] = Math.pow(numero, 2);
                } else {
                    return null;
                }
            });
            return array;
        }
        return null;
    }

    console.log(elevarCuadrado([1,2,3,4]));
}