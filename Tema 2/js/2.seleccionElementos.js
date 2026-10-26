'use strict'
{
    let listas = document.getElementsByTagName("ul");
    for (const element of listas) {
        console.log(element.textContent.trim().split('\n'));
    }

    listas = document.getElementsByClassName("cListaVehiculos");
    for (const element of listas) {
        console.log(element.textContent);
    }

    listas = document.getElementsByName("nLista");
    listas.forEach(element => {
        console.log(element);
    });

    let elementoCiclomotor = document.getElementById("idCiclomotores");
    console.log(elementoCiclomotor.textContent);
}