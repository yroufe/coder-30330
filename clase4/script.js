//FUNCIONES

// function nombreUtil(parametros) {
//     //sentencias
// }
//

function miNombre() {
    console.log("mi nombre es Yael");
}

//miNombre();

function notaUsuario(){
    let nota = parseInt(prompt("Cual es la nota?"));
    if(nota > 6) {
        console.log("aprobado");
    } else {
        console.log("desaprobado");
    }
}

// notaUsuario();

function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

suma(5, 8);
suma(3, 9);

// let numero1 = parseInt(prompt("Cual es el primer numero?")); //2
// let numero2 = parseInt(prompt("Cual es el segundo numero?")); //4

// suma(numero1, numero2);// suma(2,4)


function nombreCompleto(nombre, apellido){
    let nombreApellido = `tu nombre completo es ${nombre} ${apellido}`;
    //console.log(`tu nombre completo es ${nombre} ${apellido}`)
    return nombreApellido;
}

// nombreCompleto("Juan", "Perez");
// let nombreUsuario = prompt("cual es tu nombre?");
// let apellidoUsuario = prompt("Cual es tu apellido?");

// nombreCompleto(nombreUsuario, apellidoUsuario);

function valorProducto(precio, desc) {
    let precioFinal = precio - (precio * desc / 100);
    return precioFinal;
}

// const valorProductos = function(precio, desc) {
//     let precioFinal = precio - (precio * desc / 100);
//     return precioFinal;
// }

// const valorProductoFlecha = (precio, desc) => {
//     let precioFinal = precio - (precio * desc / 100);
//     return precioFinal;
// }





// console.log(precioFinal);

let valorVenta = valorProducto(1000, 15);
console.log(valorVenta);

function productoNuevo(){
    let precioLista = parseFloat(prompt("cual es el precio de lista?"));
    let descuento = parseInt(prompt("Cual es el porcentaje de descuento?"));
    let precioFinal = valorProducto(precioLista, descuento);
    return precioFinal;
}


/*
escribir una funcion que acepte un numero y que me diga si es 
un numero primo o no

un numero primo es un primo solo si se divide por si mismo y por uno

1 no es primo!

*/



function nombreUtil(precio) {
    //sentencias
    let precioDescuento = precio;
    if(precio > 1000) {
        console.log("que caro!")
        precioDescuento = precio * 0.8;

    } else {
        console.log("que barato!");
        precioDescuento = precio * 0.9;
    }

    return precioDescuento;


}
