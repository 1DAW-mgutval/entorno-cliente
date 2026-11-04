"use strict"
// Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
// aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
// son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.

{
    function isValidNum(num) {
        if (isNaN(num)) {
            return false;
        } else {
            return true;
        }
    }

    function isValidOperacion(operacion) {
        switch (operacion) {
            case "/":
                return true;
                break;
            case "*":
                return true;
                break;
            case "+":
                return true;
                break;
            case "-":
                return true;
                break;
            default:
                return false;
                break;
        }
    }

    let num1, num2, operacion;
    do {
        num1 = parseInt(prompt("Número 1:"));
        num2 = parseInt(prompt("Número 2:"));
        operacion = prompt("Operación deseada:")
        if(isValidOperacion(operacion)) {
            switch (operacion) {
                case "/":
                    console.log(num1/num2);
                    break;
                case "*":
                    console.log(num1*num2);
                    break;
                case "+":
                    console.log(num1+num2);
                    break;
                case "-":
                    console.log(num1-num2);
                    break;
            }
        }
    } while (!isValidNum(num1) || !isValidNum(num2) || !isValidOperacion(operacion));

}