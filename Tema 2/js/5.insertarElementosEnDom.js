'use strict'
{
    /**
     * textContent : texto sin formato: contenido de texto
     * innerHTML : texto con formato: contenido HTML
     * outerHTML : texto con formato y etiquetas HMTL: contenido HTML y conteneder HTML
     * 
     * ESTOS 3 MÉTODOS SON ACONSEJABLES PARA REEMPLAZAR/INSERTAR PEQUEÑOS TEXTOS, NO ESTRUCTURAS GRANDES
     */

    let miDiv = document.querySelector('#idDiv1');
    miDiv.textContent = '<strong>Texto del Div</strong>';
    miDiv.innerHTML = '<strong>Texto del Div</strong>';
    miDiv.innerHTML = '<br> otra <b><i>linea</i></b>';

    // Solo texto
    console.log(miDiv.textContent);

    // Texto con etiquetas
    console.log(miDiv.innerHTML);

    // Texto con etiquetas + su padre
    console.log(miDiv.outerHTML);

    // Insertar elemenos HTML 'grandes'
    // append
    // appendChild
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/append
     * append vs appendChild:
     * 1) append inserta un Node o un String (uno o varios a la vez, dados en un array)
     * 1) appendChild solo inserta Node (1 a la vez)
     * 2) append no devuelve nada
     * 2) y appendChild devuelve el Node insertado
    */

    let img = document.createElement('img');
    img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg');

    img.style.setProperty('width', '50px');
    document.body.append(img);
    console.log(img.isConnected);


    // aquí img
    // div
    // o aquí img
    // p
    // /div

    /**
     * insertAdjacent: 3 versiones:
     * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
     * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
     * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
     * 
     * llevan 2 parámetros:
     * parámetro1: posición donde va insertado el contenido.
     *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
     *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
     *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
     *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
     * parámetro2: el contenido que se inserta
    */

    let miDiv2 = document.createElement('div');
    miDiv2.style.setProperty('background-color','red');
    let miP = document.createElement('p');
    miP.innerHTML = 'aqui <b>estoy</b>';
    miDiv2.append(miP);
    document.body.append(miDiv2);
    miDiv2.insertAdjacentElement('afterbegin', img);

    let miP2 = document.querySelector('p');
    console.log(miP2);
    miP2.insertAdjacentElement('afterend', img);
}