'use strict'
{
    let botonAbrirVentana = document.createElement('button');
    botonAbrirVentana.textContent = 'Abrir Ventana';
    document.body.append(botonAbrirVentana);

    let ventana = null;
    botonAbrirVentana.addEventListener('click', () => {
        ventana = window.open('https://feet.net');
    })

    let botonCerrarVentana = document.createElement('button');
    botonCerrarVentana.textContent = 'Cerrar Ventana';
    document.body.append(botonCerrarVentana);

    botonCerrarVentana.addEventListener('click', () => {
        ventana.close();
    })

    let botonImprimirVentana = document.createElement('button');
    botonImprimirVentana.textContent = 'Imprimir Ventana';
    document.body.append(botonImprimirVentana);

    botonImprimirVentana.addEventListener('click', () => {
        window.print();
    })
}