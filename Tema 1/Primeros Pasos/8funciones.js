"use strict"
{
    function f1(param1, param2, param3=30) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    function nom() {
        let x=0;
        return x;
    }

    // f1(2,4);
    // f1(3,1,0);

    function f2(param1, param2, ...param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    // f2(2,3,4,5,6,7);

    let f4 = function (param1, param2, param3=0) {
        let r = parseInt(param1)+parseInt(param2)+parseInt(param3);
        return r;
    }

    // console.log(f4(2,4));

    ;(function(){
        console.log("Función rara")
    })();

    ;(() => {
        console.log("Función rara rarísima")
    })();

}