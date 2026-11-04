'use strict'
// EXERCISE 2: Using prompt, ask a number N to an user and 
// create in DOM N H2 elements writing your name in bold and italic + a random number between 0 and 10 in each H2.
{
    let nParraf = 0;
    do {
        nParraf = parseInt(prompt('Número de h2 que quiere insertar:'));
    } while (typeof nParraf != 'number');

    for (let index = 0; index < nParraf; index++) {
        let header = document.createElement('h2');
        header.innerHTML = '<b><i>Mario </i></b>'+Math.floor(Math.random() *11);
        document.body.append(header);
    }
}