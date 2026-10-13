'use strict'
// En un vector de cadenas, indicar:
// a. La cadena más corta.
// b. La cadena más larga.
// c. La cadena con más letras ‘a’.
// d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.

{
    let cadenas = [
        'mario gutib',
        'corta',
        'esta es la cadena más larga que verás en tu vida',
        'buena cadena con la b',
        'la que tiene más aaaaaaaaaaaaa',
        'esta tiene la b'
    ]

    // a
    let cadenaMasCorta = cadenas[0];
    cadenas.forEach(cadena => {
        if (cadena.length < cadenaMasCorta.length) {
            cadenaMasCorta = cadena;
        }
    });
    console.log('Cadena más corta: '+cadenaMasCorta);

    // b
    let cadenaMasLarga = cadenas[0];
    cadenas.forEach(cadena => {
        if (cadena.length > cadenaMasLarga.length) {
            cadenaMasLarga = cadena;
        }
    });
    console.log('Cadena más corta: '+cadenaMasLarga);

    // c
    let cadenaConA = null;
    let contadorMaxA = 0;
    cadenas.forEach(cadena => {
        if (cadena.includes('a') || cadena.includes('A')) {
            let contadorActual = 0;
            for (let index = 0; index < cadena.length; index++) {
                if (cadena.charAt(index) === 'a' || cadena.charAt(index) === 'A') {
                    contadorActual++;
                }
            }
            if (contadorActual > contadorMaxA) {
                cadenaConA = cadena;
                contadorMaxA = contadorActual;
            }
        }
    });
    console.log('Cadena más a: '+cadenaConA);

    // d
    console.log('Número de cadenas con la b: '+cadenas.filter(cadena => cadena.includes('b') || cadena.includes('B')).reduce((a,b) => 1+1));
    console.log('Cadenas con la b: '+cadenas.filter(cadena => cadena.includes('b') || cadena.includes('B')));
}