'use strict'
// EXERCISE 4: Create an image and put it after the last random number in exercise number one.
{
    let nParraf = 0;
    do {
        nParraf = parseInt(prompt('Número de párrafos que quiere insertar:'));
    } while (typeof nParraf != 'number');

    let img = document.createElement('img');
    img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg');

    for (let index = 1; index <= nParraf; index++) {
        let p = document.createElement('p');
        p.textContent = Math.floor(Math.random() *11);
        p.setAttribute('id', index);
        document.body.append(p);
    }

    document.getElementById(nParraf).insertAdjacentElement('afterend', img);
}