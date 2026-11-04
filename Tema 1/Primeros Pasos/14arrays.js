'use strict'
{
    let myArray = [];
    myArray[0] = 10;
    myArray[1] = 20;
    myArray[2] = 'Martínez';
    console.log(myArray);

    let myArray2 = new Array ();
    myArray2[0] = 10;
    myArray2[1] = '20';

    // número de elemenros
    console.log('Mi array tiene '+myArray2.length+' elementos.');

    let myArray3 = ['gamusino', 'globo', 'up'];

    // Copia por referencia
    let myArray4 = myArray3;

    // Clonado de array
    myArray4 = [...myArray3];
    console.log(myArray4);
    myArray3[3]= 'la madrastra de cenicienta';
    console.log(myArray4);

    let myArrayBi1 = new Array();
    myArrayBi1[0] = [1,2,3];
    myArrayBi1[1] = [4,5,6];
    console.table(myArrayBi1);

    let numFilas = 2;
    let numColumnas = 3;
    let myArrayBi2 = new Array(numFilas);
    for (let index = 0; index < numFilas; index++) {
        myArrayBi2[index] = new Array(numColumnas);
    }
    console.table(myArrayBi2);

    // Declarar array bidimensional INTERESANTE.
    let myArrayBi3 = Array.from(Array(numColumnas), () => Array(numColumnas));

    // recorrer con bucle anidado.

    // Recorro los elementos y meto un array
    let myArrayBi4 = new Array(numFilas).fill().map(() => new Array(numColumnas));

    // Declarar rellenando
    let myArrayBi5 = [...Array(numFilas)].map (() => Array(numColumnas).fill(0));
    console.table(myArrayBi5);

    // ***************************************OPERACIONES CON ARRAY
    // join
    let elems = ['fuego', 'aire', 'agua'];
    let str = elems.join('-');
    console.log(str);

    // split
    let strNumbers = '1,2,3,4,5,6,7,8,9,10';
    let arrayNumbers = strNumbers.split(',');
    console.log(arrayNumbers);

    // push
    let numElems = elems.push('tierra');
    console.log(elems);
    console.log(numElems);

    // pop
    let ultimo = elems.pop();
    console.log(ultimo);
    console.log(elems);

    // shift
    let primerElemento = elems.shift();
    console.log(primerElemento);
    console.log(elems);

    // reverse
    elems.reverse();
    console.log(elems);

    // slice
    let nombres = ['Rita', 'Manuel', 'Miguel', 'Ana', 'Vanessa'];
    let nombresSeleccionados = nombres.slice(-2);
    console.log(nombresSeleccionados);

    // filter
    const usuarios = [
        {name: 'Juan', age: 34},
        {name: 'Manoli', age: 41},
        {name: 'JuanFran', age: 27}
    ];
    let mayores= usuarios.filter(user => user.age > 30);
    console.table(mayores);

    // find. primer elemento del array encontrado
    let re = /M[a-z]*/i;
    console.log(usuarios.find(user => re.test(user.name)));

    // some.
    console.log(usuarios.some(user => user.age === 27));

    // findIndex. -1 si no encuentra
    console.log(usuarios.findIndex(user => user.age < 30));

    // concat
    const array1 = ['a','b','c'];
    const array2 = ['d','e','f'];
    console.table(array1.concat(array2));

    // reduce (acumulador, valorActual)
    console.log(usuarios.reduce((acc, user) => acc+user.age,0));
    console.log([1,2,3,4,5].reduce((acc,num) => acc+num,0));

    const arrayNum = [[0,1],[2,3],[4,5]];
    console.log(arrayNum.reduce((acc,val) => acc.concat(val),[]));

    // includes
    console.log(['yamaha','ducati','suzuki'].includes('suzuki'));

    // Iterar sobre los elementos del array
    // for, foreach, map, for of
    let vector = [1,2,'A','F',-1,2.4];

    vector.forEach(element => {
        console.log(element);
    });

    vector.forEach(function (element, pos) {
        console.log(pos + ': '+element);
    });

    console.log(vector.map(elems => elems+1));
    console.log(usuarios.map(user => {
        user.age = user.age*2;
        return user;
    }));
    
    
    console.log(usuarios.map(user => {
        return{
            ...user,
            altura: 100
        }
    }));

    for (let usuario of usuarios) {
        console.log(usuario);
    }
    

}