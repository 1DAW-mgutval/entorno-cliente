"use strict"
// Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
{
    function isValidHora(hora, minuto, segundo) {
        if (!isNaN(hora) && !isNaN(minuto) && !isNaN(segundo) && hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59) {
            return true;
        } else {
            return false;
        }
    }

    let hora = prompt("Hora:");
    let minutos = prompt("Minutos:");
    let segundos = prompt("Segundos:");

    if (isValidHora(hora, minutos, segundos)) {
        segundos++;
        if (segundos == 60) {
            minutos++;
            segundos = 0;
            if (minutos == 60) {
                hora++;
                minutos = 0;
                if (hora == 24) {
                    hora = 0;
                }
            }
        }
        console.log("Son las "+hora+":"+minutos+":"+segundos)
    } else {
        console.error("Hora no válida")
    }
}