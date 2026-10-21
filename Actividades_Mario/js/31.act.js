'use strict'
// Programa una función que dada una fecha válida determine cuantos años han pasado hasta
// el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) 
{
    function contadorAnios(fecha) {
        let hoy = new Date();
        if (!(fecha instanceof Date)) {
            fecha = new Date(fecha);
        }
        if (hoy.getMonth()<fecha.getMonth() || (hoy.getMonth()==fecha.getMonth() && hoy.getDate()<fecha.getDate())) {
            return hoy.getFullYear()-fecha.getFullYear()-1;
        }
        return hoy.getFullYear()-fecha.getFullYear();
    }

    console.log(contadorAnios(new Date(2000,4,23)));
    console.log(contadorAnios('11/21/2010'));
}