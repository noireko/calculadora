// CALCULADORA //
// PASOS A SEGUIR //
// Hacer una calculadora en el que el programa te pida mediante un prompt los numeros, y que mediante funciones de + - / * te resuelva el cálculo  //

/* 1- Hacer funciones de * - + /
   2- Hacer la funcion el cual te calcule mediante los prompts
   3- Usar condicionales para saber operacion hacer
   4- Dar el resultado con alert() */

const btn7 = document.querySelector(".siete");
const btn8 = document.querySelector(".ocho");
const btn9 = document.querySelector(".nueve");

const btn4 = document.querySelector(".cuatro");
const btn5 = document.querySelector(".cinco");
const btn6 = document.querySelector(".seis");

const btn1 = document.querySelector(".uno");
const btn2 = document.querySelector(".dos");
const btn3 = document.querySelector(".tres");

const btn0 = document.querySelector(".cero");

const btnPunto = document.querySelector(".punto");

const btnSuma = document.querySelector(".suma");
const btnResta = document.querySelector(".resta");
const btnMulti = document.querySelector(".multi");
const btnDiv = document.querySelector(".divid");

const btnIgual = document.querySelector(".resultado");
const pantalla = document.querySelector(".pantalla");
const btnBorrar = document.querySelector(".borrar")

const cambiarTheme = document.querySelector(".cambiarTheme");

let num1 = "";
let num2 = "";
let operator = "";

btn7.addEventListener("click", () => {
    pantalla.textContent += "7";
    if (operator === "") {
        num1 += "7";
    } else {
        num2 += "7";
    }
});

btn8.addEventListener("click", () => {
    pantalla.textContent += "8";
    if (operator === "") {
        num1 += "8";
    } else {
        num2 += "8";
    }
});

btn9.addEventListener("click", () => {
    pantalla.textContent += "9";
    if (operator === "") {
        num1 += "9";
    } else {
        num2 += "9";
    }
});

btn4.addEventListener("click", () => {
    pantalla.textContent += "4";
    if (operator === "") {
        num1 += "4";
    } else {
        num2 += "4";
    }
});

btn5.addEventListener("click", () => {
    pantalla.textContent += "5";
    if (operator === "") {
        num1 += "5";
    } else {
        num2 += "5";
    }
});

btn6.addEventListener("click", () => {
    pantalla.textContent += "6";
    if (operator === "") {
        num1 += "6";
    } else {
        num2 += "6";
    }
});

btn1.addEventListener("click", () => {
    pantalla.textContent += "1";
    if (operator === "") {
        num1 += "1";
    } else {
        num2 += "1";
    }
});

btn2.addEventListener("click", () => {
    pantalla.textContent += "2";
    if (operator === "") {
        num1 += "2";
    } else {
        num2 += "2";
    }
});

btn3.addEventListener("click", () => {
    pantalla.textContent += "3";
    if (operator === "") {
        num1 += "3";
    } else {
        num2 += "3";
    }
});

btn0.addEventListener("click", () => {
    pantalla.textContent += "0";
    if (operator === "") {
        num1 += "0";
    } else {
        num2 += "0";
    }
});

btnSuma.addEventListener("click", () => {
    pantalla.textContent += "+";
    operator = "+";
});

btnResta.addEventListener("click", () => {
    pantalla.textContent += "-";
    operator = "-";
})

btnDiv.addEventListener("click", () => {
    pantalla.textContent += "/";
    operator = "/";
})

btnMulti.addEventListener("click", () => {
    pantalla.textContent += "*";
    operator = "*";
})

btnIgual.addEventListener("click", () => {
    const resultado = operate(Number(num1), Number(num2));
    pantalla.textContent = resultado;
    num1 = String(resultado);
    num2 = "";
    operator = "";
});

btnBorrar.addEventListener("click", () => {
    pantalla.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
})

btnPunto.addEventListener("click", () => {
    if (operator === "") {
        if (num1.includes(".")) return;
        if (num1 === "") {
            num1 = "0.";
            pantalla.textContent += "0.";
        } else {
            num1 += ".";
            pantalla.textContent += ".";
        }
    } else {
        if (num2.includes(".")) return;
        if (num2 === "") {
            num2 = "0.";
            pantalla.textContent += "0.";
        } else {
            num2 += ".";
            pantalla.textContent += ".";
        }
    }
});

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2) {
    if (operator === "+") {
        return suma(num1, num2);
    } else if (operator === "-") {
        return resta(num1, num2);
    } else if (operator === "*") {
        return multi(num1, num2);
    } else if (operator === "/") {
        return div(num1, num2);
    }
}

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleTheme.textContent = "☀️";
    } else {
        toggleTheme.textContent = "🌙";
    }
});