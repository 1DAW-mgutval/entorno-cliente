'use strict'
{
    console.log(document.documentElement);
    console.log(document.head);
    console.log(document.body);
    console.log(document.doctype);
    console.log(document.characterSet);
    console.log(document.title);
    console.log(document.documentElement.lang);
    console.log(document.links);
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);

    // Node son todos los elementos del html.
    // HTMLElement contiene solo los nodos que sean propiamente de html.
    // HTMLCollection es una colección de HTMLElement, no se pueden meter en un array normal.
    // NodeList es lo mismo pero para Node.

    console.log("--------------LINKS-------------------");
    let myHTMLco = document.links;
    for (const linkActual of myHTMLco) {
        console.log(linkActual);
    }
    
}