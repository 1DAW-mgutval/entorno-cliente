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
    let num = [-1,2,3,-4,5,6,7,8,9,10];
    console.log('Número de elementos: '+num.length);


    let pares = num.filter(x => x%2===0);
    console.log('Cuántos son pares: '+pares.length+'. Números pares: '+pares);
    let impares = num.filter(x => x%2===1|| x%2===-1);
    console.log('Cuántos son pares: '+impares.length+'. Números pares: '+impares);


    console.log('Suma de números negativos: '+num.filter(x => x < 0).reduce((acc,val) => acc+val));
    
    console.log('Número de elementos: '+num.length);
    console.log('Número de elementos: '+num.length);
}