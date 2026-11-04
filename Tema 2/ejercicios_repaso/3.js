'use strict'
// EXERCISE 3: Using prompt, ask a number N to an user and create 
// in DOM an unordered list with N random numbers between 1 and 15 for each element in bold.
{
    let nParraf = 0;
    do {
        nParraf = parseInt(prompt('Número de listas que quiere insertar:'));
    } while (typeof nParraf != 'number');


    let ul = document.createElement('ul');
    document.body.append(ul);
    for (let index = 0; index < nParraf; index++) {
        let li = document.createElement('li');
        li.innerHTML = '<b>'+Math.floor(Math.random()*16)+'</b>';
        ul.insertAdjacentElement('beforeend', li);
    }
}