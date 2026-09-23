"use strict"
{
    let edadAna = parseInt(prompt("Introduce la edad de Ana"));
    let edadLuis = parseInt(prompt("Introduce la edad de Luis"));

    if (edadAna && edadLuis) {
        if (edadAna > edadLuis) {// NaN > 30
            console.log("Ana es mayor que Luis.");
            console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis);
        }
        else {
            console.log("Ana es menor o de igual edad que Luis.");
            console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis);
        }
    } else {
        console.log("Edad mala");
    }

    edadAna === edadLuis ? "Ana igual" : "Luis diferente";
}