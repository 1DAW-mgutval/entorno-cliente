"use strict"
{
    function cuentaAtras1(num) {
        if (num !== 0) {
            console.log(num);
            cue(num-1);
        } else {
            console.log(num);
        }
    }

    // cuentaAtras1(10);

    let cuentaAtras2 = function (num) {
        if (num !== 0) {
            console.log(num);
            cuentaAtras2(num-1);
        } else {
            console.log(num);
        }
    }
    // cuentaAtras2(15);

    let cuentaAtras3 = num => {
        if (num !== 0) {
            console.log(num);
            cuentaAtras3(num-1);
        } else {
            console.log(num);
        }
    }

    // cuentaAtras3(20);

    let sumaTodos = (num) => {
        if (num !== 0) {
            return num + sumaTodos(num-1);
        } else {
            return 0;
        }
    }

    // console.log(sumaTodos(10));

    let parImpar = num => {
        if (num === 0) {
            console.log("PAR")
        } else if (num === 1) {
            console.log("IMPAR")
        } else {
            parImpar(num-2)
        }
    }

    // parImpar(10);

    let parImpar2 = num => {
        if (num === 0) {
            return "PAR";
        } else if (num === 1) {
            return "IMPAR";
        } else {
            return parImpar2(num-2);
        }
    }

    console.log(parImpar2(11));

}