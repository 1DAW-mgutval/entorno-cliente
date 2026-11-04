'use strict'
// EXERCISE 6: Create a paragraph with your name and put it after the end of unorderer list in exercise three
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
    
    ul.insertAdjacentHTML('afterend', '<p>MARIO GUTIÉRREZ</p>');
}