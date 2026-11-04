'use strict'
// Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
// Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]
{
    function eliminarDuplicados(array) {
        if (array instanceof Array) {
            let res = [];
            array.forEach(element => {
                if (!res.includes(element)) {
                    res[res.length] = element;
                }
            });
            return res;
        }
        return null;
    }

    console.log(eliminarDuplicados(['x',10,'x',2,'10',10,true,true]));
}