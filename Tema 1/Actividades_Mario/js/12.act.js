'use strict'
// Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F
{
    function transformarTemperatura(num, escala) {
        if (!isNaN(num) && (escala === 'C' || escala === 'F')) {
            if (escala === 'C') {
                return ((num*9/5)+32)+'ºF';
            } else {
                return ((num-32)*5/9)+'ºC';
            }
        } else {
            return null;
        }
    }

    console.log(transformarTemperatura(parseInt(32),'F'));
}