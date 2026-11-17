'use strict'
{
    let boton = document.createElement('button');
    boton.textContent = 'Reaparecer párrafos';
    document.body.append(boton);

    let parrafos = [];
    for (let index = 1; index < 4; index++) {
        parrafos[parrafos.length] = document.createElement('p');
        parrafos[parrafos.length-1].textContent = 'Párrafo '+index;
    }

    parrafos.forEach(parrafo => {
        document.body.append(parrafo);
        parrafo.addEventListener('mouseleave', () => {
            parrafo.style.visibility = 'hidden';
        });

        parrafo.addEventListener('dblclick', () => {
            parrafo.remove();
        });
    });

    boton.addEventListener('click', () => {
        parrafos.forEach(parrafo => {
            parrafo.style.visibility = 'visible';
        });
        console.log(parrafos);
    })
}