'use strict'
// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
//     igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
{
    function palindromo(cadena) {
        if (typeof cadena === 'string') {
            let separada = cadena.split('');
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

    console.log(palindromo('salas'));
}