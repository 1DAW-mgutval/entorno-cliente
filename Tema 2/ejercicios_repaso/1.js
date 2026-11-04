'use strict'
// EXERCISE 1: Using prompt, 
// ask a number N to an user and create in DOM N paragraphs with a random number between 0 and 10 each one (both included).
{
    let nParraf = 0;
    do {
        nParraf = parseInt(prompt('Número de párrafos que quiere insertar:'));
    } while (typeof nParraf != 'number');

    for (let index = 0; index < nParraf; index++) {
        let p = document.createElement('p');
        p.textContent = Math.floor(Math.random() *11);
        document.body.append(p);
    }
}