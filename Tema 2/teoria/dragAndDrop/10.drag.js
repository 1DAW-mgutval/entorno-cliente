'use strict'
{
    let cajaRoja = document.querySelector('.cajaRoja');
    let cajaAzul = document.querySelector('.cajaAzul');
    let contenedor = document.querySelector('.contenedor');

    let cajaArrastrada = null;

    cajaRoja.addEventListener('dragstart', (evento) => {
        console.log('dragstart');
        cajaArrastrada = evento.target;
    })

    cajaAzul.addEventListener('dragstart', (evento) => {
        console.log('dragstart');
        cajaArrastrada = evento.target;
    })

    cajaRoja.addEventListener('drag', (evento) => {
        console.log('drag');
    })

    cajaAzul.addEventListener('drag', (evento) => {
        console.log('drag');
    })

    cajaRoja.addEventListener('dragend', (evento) => {
        console.log('dragend');
    })

    cajaAzul.addEventListener('dragend', (evento) => {
        console.log('dragend');
    })



    contenedor.addEventListener('dragenter', (evento) => {
        console.log('dragenter');
    })
    contenedor.addEventListener('dragleave', (evento) => {
        console.log('dragleave');
    })
    contenedor.addEventListener('dragover', (evento) => {
        // Hace que se puedan dropear elementos.
        evento.preventDefault();
        console.log('dragover');
    })
    contenedor.addEventListener('drop', (evento) => {
        console.log('drop');
        contenedor.insertAdjacentElement('afterbegin',cajaArrastrada);
        if (contenedor.childElementCount == 2) {
            let miH1 = document.createElement('h1');
            miH1.textContent = '¡Ya tienes acceso a GTA VI!';
            contenedor.insertAdjacentElement('afterend', miH1);
        }
    })
}