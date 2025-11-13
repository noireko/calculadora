// CALCULADORA //
// PASOS A SEGUIR //
// Hacer una calculadora en el que el programa te pida mediante un prompt los numeros, y que mediante funciones de + - / * te resuelva el cálculo  //

/* 1- Hacer funciones de * - + /
   2- Hacer la funcion el cual te calcule mediante los prompts
   3- Usar condicionales para saber operacion hacer
   4- Dar el resultado con alert() */

let num1 = Number(prompt("Introduzca el primer número: "));
let num2 = Number(prompt("Introduzca el segundo número: "));
let operator = prompt("Qué quiere hacer con estos numeros?: ").toLowerCase();

function suma(num1, num2) {
   return num1 + num2
}

function resta(num1, num2) {
    return num1 - num2
}

function multi(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num1 / num2
}

function operate(num1, num2) {
    if (operator == "+") {
        return suma(num1, num2)
    } else if (operator == "-") {
        return resta(num1, num2)
    } else if (operator == "*") {
        return multi(num1, num2)
    } else {
        return div(num1, num2)
    }
}

operate(num1, num2)