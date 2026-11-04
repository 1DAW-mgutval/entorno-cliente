"use strict"
{
    // try {
    //     console.log("En el Try se agrega el código a evaluar"); //se ejecuta
    //     let noExiste; //Lanza un error
    //     console.log("Segundo mensaje en el try"); //no se ejecuta porque salta un error en la línea anterior
    //     let edad = prompt("Introduzca edad");
    //     if (edad < 18) {
    //         throw new Error("Eres menor de edad");
    //     }
    // } catch (error) {
    //     console.error("Catch, captura cualquier error surgido o lanzado en el try");//se ejecuta
    //     console.error(error);//Se ejecuta
    // } finally {
    //     console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");//se ejecuta siempre
    // }

    // try {
    //     let a=5, b=0;
    //     let c = a / b;
    //     console.log("El resultado es "+c);

    //     const v = [1,2,3]
    //     v[0] = 4
    //     console.log(v);
    // } catch (e) {
    //     console.error("IMPOSIBLE")
    // }

    try {
        let num = prompt("Introduce numero", "hola");
        if (isNaN(num)) {
            throw new Error("No es un número");
         } else {
            console.log("Es número");
        }
    } catch (e) {
        console.error(e)
    }

}