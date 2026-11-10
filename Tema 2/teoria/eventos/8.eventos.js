'use strict'

// Fuera de llaves
function saludar3() {
    alert('saludar 3');
}

{
    let boton4 = document.querySelector('#idBoton4');

    // Solo coge el último evento
    boton4.onclick = function () {
        alert('saludar 4');
    }
    boton4.onclick = function () {
        alert('saludar 4.1');
    }



    function saludar5() {
        alert('saludar 5');
    }
    let boton5 = document.querySelector('#idBoton5');
    boton5.addEventListener('mouseover', saludar5)

    boton5.addEventListener('click', function () {
        alert('saludar 5.click');
    })

    boton5.removeEventListener('mouseover', saludar5);



    document.addEventListener('DOMContentLoaded', function () {
        console.log('Ya está cargado el HTML solo (sin CSS)');
    })

    window.addEventListener('load', function () {
        console.log('Ya está cargado el HTML y el CSS');
    })
}