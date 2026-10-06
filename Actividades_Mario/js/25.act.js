'use strict'
// Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
    // un sentido que en otro), pe. miFuncion(2002) devolverá true.
    
{
    function capicua(num) {
        if (typeof num === 'number') {
            let separada = num.toString().split('');
            let reverso = [...separada].reverse();
            let indice = 0;
            for (const element of separada) {
                if (element !== reverso[indice]) {
                    return false;
                }
                indice++;
            }
            return true;
        }
    }

    console.log(capicua(10101));
}