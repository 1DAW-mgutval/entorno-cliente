'use strict'
// En un vector de números, indicar:
// a. El número de elementos del vector.
// b. Cuántos son pares y cuántos impares y cuáles son.
// c. La suma de todos los números negativos.
// d. El producto de todos los números positivos.
// e. Cuántos son primos y cuáles son.
// f. Los números que ocupan las posiciones pares del vector.
// g. El número mayor.
// h. El número menor.
// i. La media de todos los números, los números que están por encima y los que están por
// debajo.
// j. El vector ordenado de mayor a menos y viceversa.
// k. Buscar un valor introducido por el usuario e indicar si existe o no
{
    let num = [-1,2,3,-4,5,6,7,8,9,10,11];
    console.log('Números: '+num);
    // a
    console.log('Número de elementos: '+num.length);

    // b
    let pares = num.filter(x => x%2===0);
    console.log('Cuántos son pares: '+pares.length+'. Números pares: '+pares);
    let impares = num.filter(x => x%2===1|| x%2===-1);
    console.log('Cuántos son impares: '+impares.length+'. Números impares: '+impares);

    // c
    console.log('Suma de números negativos: '+num.filter(x => x < 0).reduce((acc,val) => acc+val));
    
    // d
    console.log('Producto de números positivos: '+num.filter(x => x >= 0).reduce((acc,val) => acc*val));

    // e
    console.log('Números no primos: '+num.filter(x => {
        for (let index = 2; index < x; index++) {
            if (x % index === 0) {
                return x;
            }
        }
        if (x < 0) {
            for (let index = -2; index > x; index--) {
                if (x % index === 0) {
                    return x;
                }
            }
        }
    }).map(x => x=1).reduce((acc,val) => acc+val));

    console.log('Números primos: '+num.filter(x => {
        let contador = 0;
        for (let index = 2; index < x; index++) {
            if (x % index === 0) {
                contador++;
            }
        }
        if (x < 0) {
            for (let index = -2; index > x; index--) {
                if (x % index === 0) {
                    contador++;
                }
            }
        }
        if (contador === 0) {
            return x;
        }
    }).map(x => x=1).reduce((acc,val) => acc+val));

    // f
    console.log('Números que ocupan la posición par: '+num.filter((number,index) => {
        if (index % 2 === 0) {
            return number;
        }
    }))

    // g
    let mayor = Number.MIN_SAFE_INTEGER;
    num.forEach(number => {
        if (number > mayor) {
            mayor = number;
        }
    })
    console.log('Número mayor: '+mayor);

    // h
    let menor = Number.MAX_SAFE_INTEGER;
    num.forEach(number => {
        if (number < menor) {
            menor = number;
        }
    })
    console.log('Número mayor: '+menor);

    // i
    let media = num.reduce((acc,val)=>acc+val)/num.length;
    console.log('Media de todos los números: '+media)
    console.log('Por encima de la media: '+num.filter(num => num>media));
    console.log('Por debajo de la media: '+num.filter(num => num<media));

    // j
    console.log('Ordenado de mayor a menor: '+num.sort((a,b) => b-a));
    console.log('Ordenado de menor a mayor: '+num.sort((a,b) => a-b));

    // k
    let usuario = prompt('introduzca un índice');
    if (usuario >= 0 && usuario < num.length) {
        console.log('Vector del usuario: '+num[usuario]);
    } else{
        console.error('Vector no encontrado');
    }
}