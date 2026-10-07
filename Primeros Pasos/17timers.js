'use strict'
{
    console.log('1');
    // Temporizadores
    setTimeout (function (params) {
        console.log('timeout');
    },2000);
    console.log('2');

    // callback => pasarle una función a otra función.
    setTimeout(f,4000);
    function f() {
        console.log('timeout f');
    }
    console.log('3');


    let codigo = setInterval(f2,1000);
    function f2() {
        console.log('timeout f2');
    }

    setTimeout(() => {
        return clearInterval(codigo)
    }, 10000);

}