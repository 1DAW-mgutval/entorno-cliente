'use strict'
{
    let bolaPapel = document.querySelector('.bolaPapel');
    let elementoDropeado = null;
    bolaPapel.addEventListener('dragstart',(evento) => {
        elementoDropeado = evento.target;
    })
    

    let papelera = document.querySelector('.papelera');
    papelera.addEventListener('dragover',(evento) => {
        evento.preventDefault();
    })

    papelera.addEventListener('drop',() => {
        papelera.src = 'src/PapeleraLlena.png';
        elementoDropeado.remove();
    })
}