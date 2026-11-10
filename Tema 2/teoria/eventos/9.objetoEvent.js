'use strict'
{
    let boton5 = document.querySelector('#idBoton5');
    console.log(boton5);

    let miP1 = document.createElement('p');
    boton5.parentElement.previousElementSibling.previousElementSibling.insertAdjacentElement('afterend', miP1);

    // boton5.addEventListener('mousemove', function (evento) {
    //     console.log(evento);
    //     console.log(evento.button);
    //     console.log(evento.x); // sobre la esquina superior izquierda de la ventana
    //     console.log(evento.y); // sobre la esquina superior izquierda de la ventana
    //     console.log(evento.clientX); // mismo que x
    //     console.log(evento.clientY); // mismo que y
    //     console.log(evento.offsetX); // sobre el objeto (en este caso el botón)
    //     console.log(evento.offsetY); // sobre el objeto (en este caso el botón)
    //     console.log(evento.screenX); // sobre la pantalla
    //     console.log(evento.screenY); // sobre la pantalla

    //     miP1.innerHTML = 'X=<strong>' + evento.x + '</strong> Y= '+evento.y;x   
    // })

    function mostrarmensaje(evento) {
        if (evento instanceof Event) {
            if (evento.type == 'keyup') {
                console.log(evento.code);
                console.log(evento.key);
            } else if (evento.type == 'click') {
                // console.log(evento.clientX);
                // console.log(evento.clientY);
                // console.log(evento.screenX);
                // console.log(evento.screenY);
                // console.log(evento.button);
                console.log(evento.detail);
                console.log(evento.ctrlKey);
                console.log(evento.altKey);
                console.log(evento.shiftKey);
                console.log(evento.target); // target es el elemento html
                console.log(evento.target.id);
                console.log(evento.target.name);
            } else if (evento.type == 'dblclick') {
                console.log('doble click');
                this.textContent = 'hoy es martes'; //this es lo mismo que target
            } else if (evento.type == 'contextmenu') {
                console.log('boton derecho');
                evento.preventDefault();
            }
        }

    }

    boton5.addEventListener('keyup', evento => mostrarmensaje(evento));
    boton5.addEventListener('click', evento => mostrarmensaje(evento));
    boton5.addEventListener('dblclick', mostrarmensaje);
    boton5.addEventListener('contextmenu', evento => mostrarmensaje(evento), { once: true } /*para que solo se haga 1 vez*/);
    boton5.addEventListener('contextmenu', function () {
        console.log('VIVAN LAS MONAS CHINAS');
    }, { capture: true });

    /**
     * LISTA DE EVENTOS:
     *  onfocus: al obtener un foco. 
        onblur: al salir del foco de un elemento.
        onchange: al hacer un cambio en un elemento.
        onclick: al hacer un click en el elemento.
        ondblclick: al hacer doble click en un elemento.
        onkeydown: al pulsar una tecla (sin soltarla).
        onkeyup: al soltar una tecla pulsada.
        onkeypress: al pulsar una tecla.
        onload: al cargarse una página.
        onunload: al descargarse una página (salir de ella).
        onmousedown: al hacer clic de ratón (sin soltarlo).
        onmouseup: al soltar el botón del ratón previamente pulsado.
        onmouseover: al entrar encima de un elemento con el ratón.
        onmouseout: al salir de encima de un elemento con el ratón.
        onsubmit: al enviar los datos de un formulario.
        onreset: al resetear los datos de un formulario.
        onselect: al seleccionar un texto.
        onresize: al modificar el tamaño de la página del navegador. 
        contextmenu: al hacer click con el botón derecho.
    */
}