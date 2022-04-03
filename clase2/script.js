// // = asignacion
// let edad = 18;

// //para comparar -  == - operador logico
// let mayorEdad = (edad == 18); //false

// //IF

// if (mayorEdad) {
//     //codigo
//     alert("sos mayor de edad!!");
// }

// let deporteFavorito = prompt("Cual es tu deporte favorito?");
// deporteFavorito = deporteFavorito.toLowerCase(); // toUpperCase()

// if ((deporteFavorito == "voley") || (deporteFavorito == "VOLEY") || (deporteFavorito == "Voley")) {
//     alert("el mio tambien!");
// } else if (deporteFavorito == "rugby") {
//     alert("ese deporte no me gusta")
// } else {
//     //alert("Tu deporte favorito es " + deporteFavorito + ". el mio es el voley");
//     //string template
//     alert(`Tu deporte favorito es ${deporteFavorito}. el mio es el voley`);
// }

// let nota = parseInt(prompt("Cual fue tu nota en matematica?"));

// if (nota <= 4) {
//     alert("desaprobaste!");
// } else if (nota <= 7) {
//     alert("tenes que mejorar tu nota un poco");
// } else {
//     alert("te felicito");
// }

// let precio = parseInt(prompt("cual es el precio?"));

// // si el precio es mayor a 1000 entonces, aplicamos un descuento del 50%
// // si no es mayor a 1000 entonces, aplicamos un descuento del 25%
// let precioNuevo;
// if(precio > 1000) {
//     precioNuevo = precio / 2;
// } else {
//     precioNuevo = precio * 0.75;
// }
// console.log(`el precio nuevo es ${precioNuevo}`);


// let nota1 = parseInt(prompt("Cual es tu nota"));
// let nota2 = parseInt(prompt("Cual es tu 2  nota"));
// let nota3 = parseInt(prompt("Cual es tu 3  nota"));

// let promedio = ((nota1 + nota2 + nota3)  / 3);

// if(promedio > 6){
//     alert ("genial aprobaste con mayor ");


// } else if ( promedio == 6 )
// {
//     alert ("genial aprobaste ") ;
// }
// else
// {
//     alert ("desprobaste");
// }


// let num1 = 1;
// let numUno = "1";

// let sonIguales = (num1 === numUno);

// console.log(sonIguales);


//EJERCICIO
/*
Preguntar al usuario su edad

Si tiene - entre 0 y 17 anios - dato de salida - "Eres un/a ninio/a"
si tiene entre 18 y 40 - "sos un/a joven"
si tiene mas  - " trajiste tu baston??"
*/

//Number() -----  parseInt() ------ parseFloat()

// let precio = parseInt(prompt("cual es el precio"));
// const IVA = 0.21;
// console.log(precio + (precio * IVA));

/* 
    Hay 3 tipos de triangulos
        equilateros - 3 lados iguales
        isosceles - 2 lados iguales y uno distinto
        escaleno - 3 lados diferentes

    le vamos apedir al usuario los 3 lados y le vamos a decir que tipo de triangulo es
*/

// let lado1 = parseInt(prompt("Cuanto mide el lado 1?"));
// let lado2 = parseInt(prompt("Cuanto mide el lado 2?"));
// let lado3 = parseInt(prompt("Cuanto mide el lado 3?"));

// //lado1 == lado2 y lado2 == lado3
// //lado1 == lado2 o lado2 == lado3

// if ((lado1 == lado2) && (lado2 == lado3)) {
//     console.log("el triangulo es equilatero");
// } else if ( (lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3) ) {
//     console.log("el triangulo es isosceles");
// } else {
//     console.log("el triangulo es escaleno");
// }


// confirm()
// let casado = confirm("estas casado/a?");
// console.log(casado);

// if (casado) {
//     console.log("Que valiente!");
// } else {
//     console.log("Que cobarde!");

// }

let nombreIngresado = prompt("Ingresar nombre").toLowerCase();

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
///          30     trim() 

if(((nombreIngresado !="") && (nombreIngresado == "EMA")) || (nombreIngresado =="ema")){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
