'use strict'
{
    // Set
    let mySet = new Set();
    mySet.add(1);
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    mySet.add({});
    mySet.add({});
    mySet.add('Mmmm dias');

    mySet.forEach(elem => {
        console.log(elem);
    });

    console.log('-------------FOR OF---------------');
    for (const e of mySet) {
        console.log(e);
    }

    console.log('-------------De array a set---------------');
    let myArray = new Array(1,2,3,3,{},{}, 'Hola', true);
    let mySet2 = new Set(myArray);

    mySet2.forEach(elem => {
        console.log(elem);
    });
    
    console.log('-------------De array a set con from---------------');
    let myArray2 = new Array();
    myArray2= Array.from(mySet);
    myArray2.map(elem => console.log(elem));

    console.log('-------------Funciones de Set---------------');
    console.log(mySet.size);
    mySet.has(1)?console.log('si'):console.log('no');
    mySet.delete(1);
    mySet.has(1)?console.log('si'):console.log('no');
    mySet.clear();
    console.log(mySet);



    console.log('-------------MAP---------------');
    let myMap = new Map();
    myMap.set('clave', 'valor');
    myMap.set('name', 'Luis');
    myMap.set('lastname', 'Martínez');
    myMap.set('age', 24);
    console.log(myMap);

    console.log(myMap.size);
    console.log(myMap.has('email'));
    console.log(myMap.has('name'));
    console.log(myMap.get('name'));
    myMap.set('name', 'Luis Enrique');
    console.log(myMap);
    myMap.set({}, 10);
    myMap.set(true, 50);
    console.log(myMap);

    myMap.forEach((valor, clave) => console.log(clave+'-'+valor));

    console.log('-----FOROF-----');
    for (const [valor,clave] of myMap) {
        console.log(valor+'-'+clave)
    }

    let myMap2 = new Map([
        ['name', 'Pepe'],
        ['surname', 'Pérez'],
        ['age',120]
    ])
    console.log(myMap2);
    
    let myKeys = [...myMap2.keys()];
    let myValues = [...myMap2.values()];
    console.log('Claves: '+myKeys);
    console.log('Valor: '+myValues);
    
}