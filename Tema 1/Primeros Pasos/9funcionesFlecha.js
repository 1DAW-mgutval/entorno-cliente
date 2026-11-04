"use strict"
{
    // Arrow Functions
    //Expresión de la función
    function sumar (n1, n2) {
        return n1 + n2;
    }
    /*Arrow function equivalente: se elimina la palabra reservada function y fue
    ra del parántesis de los parámetros pones la flecha =>
    además las {} son opcionales si solo tienes una línea y el return es
    implícito. Si no hubiera parámetros hay que poner los paréntesis ()*/
    let sumar1 = (n1, n2) => n1 + n2;

    console.log(sumar(1,2));
    console.log(sumar1(2,2));

    // const res = sumar(5, 12);
    // console.log(`El resultado es ${res}`);
    //Expresión de la función
    // function aprendiendo (tecnologia) {
    //     console.log(`Aprendiendo ${tecnologia}`)
    // }
    /*Arrow function equivalente: se elimina la palabra reservada function y fue
    ra del parántesis de los parámetros pones la flecha =>
     además las {} son opcionales si solo tienes una línea y puedes quitar los paréntesis () si sólo 
    tienes un parámetro Si no hubiera parámetros hay que poner los paréntesis ()*/
    // const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
    // aprendiendo('JavaScript');
}