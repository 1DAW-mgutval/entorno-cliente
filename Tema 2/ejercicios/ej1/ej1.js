'use strict'
{
    let nuevoNum = document.createElement('button');
    nuevoNum.textContent = 'Nuevo número';
    let eliminarNum = document.createElement('button');
    eliminarNum.textContent= 'Eliminar último número';
    let lista = document.createElement('ul');

    document.body.append(nuevoNum, eliminarNum, lista);


    nuevoNum.addEventListener('click', () => {
        let li = document.createElement('li');
        li.textContent = Math.floor(Math.random() * (101 - 1) + 1);

        lista.append(li);
    })

    eliminarNum.addEventListener('click', () => {
        if (lista.children.length > 0) {
            lista.lastElementChild.remove();
        }
    })
}