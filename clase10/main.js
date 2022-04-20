//let mensaje = "Bienvenidos a la clase de storage - clase 10";
//console.log(mensaje);

//STORAGE - 2 TIPOS - guarda por dominio
// 1 - localStorage - va a guardar la informacion por siempre o hasta que la borremos
// 2 - sessionStorage - guarda la informacion - mientras la ventana este abierta.

// clave y valor
//localStorage.setItem("saludo", mensaje);

// console.log(localStorage.getItem("saludo"));

// let nombre = "mi nombre es Yael";
// //localStorage.setItem("nombre", nombre);

// //sessionStorage.setItem("temporal", 2021);

// for (let i= 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log(`la clave es ${clave} y el valor es ${localStorage.getItem(clave)}`)
// }

// localStorage.removeItem("nombre");

// let producto1 = {
//     nombre: "auto",
//     precio: 100000
// }

// localStorage.setItem("producto", JSON.stringify(producto1));

class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }
}

const listaMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const nuevaMascota = () => {
    let nombre = prompt("como se llama la mascota?");
    let tipo = prompt("que tipo de mascota es?");
    let edad = prompt("que edad tiene?");

    let mascota = new Mascota(nombre, tipo, edad);
    listaMascotas.push(mascota);
    localStorage.setItem("mascotas",JSON.stringify(listaMascotas));
    // const listaNueva = JSON.parse(localStorage.getItem("mascotas"));
    // listaNueva.push(mascota);
    // localStorage.setItem("mascotas", JSON.stringify(listaNueva));

    // if(localStorage.getItem("mascotas") == null ) {
    //     listaMascotas.push(mascota);
    //     localStorage.setItem("mascotas",JSON.stringify(listaMascotas));
    // } else {
    //     const listaNueva = JSON.parse(localStorage.getItem("mascotas"));
    //     listaNueva.push(mascota);
    //     localStorage.setItem("mascotas", JSON.stringify(listaNueva));
    // }

}