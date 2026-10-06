'use strict'
//  Programa una función para contar el número de veces que se repite una palabra en un texto
// largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
{
    function contarApariciones(cadena, palabra) {
        if (typeof cadena ==='string' && typeof palabra ==='string') {
            let separado = cadena.split(' ');
            let apariciones = 0;
            separado.forEach(element => {
                if (element === palabra) {
                    apariciones++;
                }
            });
            return apariciones;
        }
    }

    console.log(contarApariciones('hola mundo adios mundo', 'mundo'));
}