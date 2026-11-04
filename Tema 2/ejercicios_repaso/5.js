'use strict'
// EXERCISE 5: Create a link to www.google.es before the first child of the H2 in exercise number two
{
    let nParraf = 0;
    do {
        nParraf = parseInt(prompt('Número de h2 que quiere insertar:'));
    } while (typeof nParraf != 'number');

    let link = document.createElement('a');
    link.setAttribute('href','https://www.google.es');
    link.innerHTML = 'enlace a google';
    for (let index = 1; index <= nParraf; index++) {
        let header = document.createElement('h2');
        header.innerHTML = '<b><i>Mario </i></b>'+Math.floor(Math.random() *11);
        header.setAttribute('id', 'ej2_'+index);
        document.body.append(header);
    }
    document.getElementById('ej2_1').insertAdjacentElement('beforebegin', link);
}