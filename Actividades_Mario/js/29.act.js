'use strict'
// Programa una función para convertir números de base binaria a decimal y viceversa, pe.
// miFuncion(100,2) devolverá 4 base 10
{
    function binarioDecimal(numero, opcion) {
        if (typeof numero === 'number' && typeof opcion === 'number') {
            let res = 0;
            if (opcion === 1) {
                let contador = 0;
                while (numero > 0) {
                    if (numero%2 === 0) {
                        contador++;
                    } else {
                        res = res+Math.pow(10,contador);
                        contador = 0;
                    }
                    numero = numero/2;
                }
                return res.toString().split('').reverse().join('');
            } else if (opcion === 2) {
                let invertido = numero.toString().split('').reverse();
                let contador = 0;
                invertido.forEach(numero => {
                    if (numero === '1') {
                        res += Math.pow(2,contador);
                    }
                    contador++;
                });
                return res;
            }
        }
    }

    console.log(binarioDecimal(100, 2));
    console.log(binarioDecimal(4, 1));
}