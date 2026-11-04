'use strict'
// Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
// este formato dd/mm/aaa.
{
    function edadPersona(nacimiento) {
        let hoy = new Date();
        if (typeof nacimiento == 'string') {
            let fecha = nacimiento.split('/');
            let dia = fecha[0];
            let mes = fecha[1];
            fecha[0] = mes, fecha[1] = dia;
            fecha = new Date(fecha.join('/'));
            if (hoy.getMonth() < fecha.getMonth() || (hoy.getMonth() == fecha.getMonth() && hoy.getDate() < fecha.getDate())) {
                return hoy.getFullYear() - fecha.getFullYear() - 1;
            }
            return hoy.getFullYear() - fecha.getFullYear();
        }
        return null;
    }

    console.log(edadPersona('21/11/2007'))
}