// let repeticion = parseInt(prompt("Cuantas veces queres repetir?"));

// for (let i = 1; i <= repeticion; i++) {
//     // if(i % 2 == 0 ) {  //modulo % - resto de la division
//     //     console.log(i);
//     // }
//     if( i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// validacion de contrasena
// let pass = 1234;
// let dato = parseInt(prompt("cual es la contrasena?"));
// let intentos = 3;
// while((dato != pass) ) {
//     if (intentos > 0) {
//         intentos--;
//         alert(`la contrasena es erronea. te quedan ${intentos}`);
//         dato = parseInt(prompt("cual es la contrasena?"));
//     } else {
//         break;
//     }
// }

// let animal = prompt("que animal te gusta?");

// switch (animal) {
//     case "gato":
//         console.log("el gato hace miau!");
//         break;
//     case "perro":
//         console.log("el perro hace guau!");
//         break;
//     case "vaca":
//         console.log("la vaca hace mu!");
//         break;
//     default:
//         console.log("no se como hace ese animal");
//         break;
// }

/* hacer una calculadora

1 - le pedir al usuario 1 numero
2 - le pedimos el segundo numero
3 - le pedimos al usuario que operacion quiere hacer

switch - va a evaluar la operacion - y va a calcularla

*/

let num1 = parseInt(prompt("cual es el primer numero"));
let num2 = parseInt(prompt("cual es el segundo numero"));
let operacion = prompt("Cual es la operacion? +, -, x, /");
let resultado = 0;

switch (operacion) {
    case "+":
        resultado = num1 + num2;
        console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
        break;
    case "-":
        resultado = num1 - num2;
        console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
        break;
    case "x":
        resultado = num1 * num2;
        console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
        break;
    case "/":
        resultado = num1 / num2;
        console.log(`el resultado de ${num1} ${operacion} ${num2} es ${resultado}`);
        break;
    default:
        alert("esto no es una operacion matematica");
        break;
}

if (color == "azul") {
    resultado = blanco;
}
//operador ternario
resultado = (color == "azul") ? "si" : "no";