'use strict'
{
    function calcularEdad(fecha) {
        let nacimiento = new Date(fecha);
        let fechaActual = new Date();
        if (fechaActual.getMonth()>=nacimiento.getMonth()) {
            if (fechaActual.getDate()>=nacimiento.getDate()) {
                return parseInt(fechaActual.getFullYear())-parseInt(nacimiento.getFullYear());
            } else {
                return parseInt(fechaActual.getFullYear())-parseInt(nacimiento.getFullYear())-1;
            }
        } else {
            return parseInt(fechaActual.getFullYear())-parseInt(nacimiento.getFullYear())-1;
        }
    }

    console.log(calcularEdad('2007/1/8'));
}