//FALSY
// determina si un dato es 
/*
 vacio - null
 ""
 0
 undefined
 NaN
 false

*/
// let array = 0 || "Falsy"; //Falsy

// let usuario = {
//     nombre: "Maria",
//     edad: 31
// }

// console.log(usuario.nombre)
// console.log(usuario.imagen ?? "<img src='default.png'>")


// // console.log(usuario2?.nombre)

// console.log(document.getElementById("item").appendChild("h1"));

//DESESTRUCTURACION

let mascota1 = {
    nombre: "Lucky",
    edad: 3,
    dueno: {
        nombre:"Juan",
        telefono: 11111,
    },
    genero: "masculino"
}

// let nombre = mascota.nombre;
let { nombre, edad, dueno: {telefono}, genero = "desconocido"} = mascota1;
// console.log(nombre);
// console.log(edad)
// console.log(telefono)
// console.log(genero)


// mascota1.nombre = "Daisy";
// nombre = "Simba"
// console.log(mascota1.nombre)
// console.log(nombre)


// window.addEventListener('click', ( {x, y} ) => {
//     console.log(x, y)
// })

// let colores = ["azul","rojo","verde","amarillo"];

// console.log(colores);
// console.log(...colores);

// let nros = [5,23,87,12,100]
// console.log(typeof (Math.max(...nros)))

function suma( ...numeros) {
    console.log(numeros)
    return numeros.reduce((acc,n)=> acc + n,0);
}

console.log(suma(2,3))
console.log(suma(2,3,80,55,63,72))