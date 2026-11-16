'use strict'
{
    function esPrimo(num) {
        if (typeof num == 'number') {
            for (let index = 2; index < num; index++) {
                if (num % index == 0) {
                    return false;
                }
            }
            return true;
        }
    }

    let contenedorNum = document.querySelector('.contenedorNum');
    let calcular = document.querySelector('.calcular');
    let restablecer = document.querySelector('.restablecer');

    let tr = null;
    for (let index = 1; index <= 100; index++) {
        let td = document.createElement('td');
        td.setAttribute('class', 'sinFormato');
        td.textContent = index;
        if ((index-1) % 10 == 0 || index == 1) {
            tr = document.createElement('tr');
            tr.insertAdjacentElement('afterbegin', td);
            contenedorNum.insertAdjacentElement('beforeend', tr);
        } else {
            tr.insertAdjacentElement('beforeend', td);
        }
    }

    calcular.addEventListener('click', () => {
        for (const fila of contenedorNum.children) {
            for (const columna of fila.children) {
                if (esPrimo(parseInt(columna.textContent))) {
                    columna.setAttribute('class', 'primo');
                }
            }
        }
    })

    restablecer.addEventListener('click', () => {
        for (const fila of contenedorNum.children) {
            for (const columna of fila.children) {
                if (esPrimo(parseInt(columna.textContent))) {
                    columna.setAttribute('class', 'sinFormato');
                }
            }
        }
    })
}