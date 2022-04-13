// //metodos para acceder al dom
// // 1 - por ID - me trae un OBJETO
// console.log(document.getElementById("titulo"));

// // 2 - por clase - trae un ARRAY de OBJETOS
// console.log(document.getElementsByClassName("parrafo"));

// // 3 - por etiqueta - trae un ARRAY de OBJETOS
// let parrafos = document.getElementsByTagName("p");

// for (const parrafo of parrafos) {
//     console.log(parrafo);
// }

// // 4 - queryselector - SOLO TRAE EL PRIMERO QUE ENCUENTRA - OBJETO
// document.querySelector("#titulo");
// document.querySelector(".parrafo");
// document.querySelector("h2");
// document.querySelector("div > form");

// // 5 - querySelectorAll
// document.querySelectorAll("p");

let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerText)
// let nombre = prompt("cual es tu nombre");
// titulo.innerText = "tu nombre es" + nombre;
// titulo.innerHTML = "<a href='google.com'>accede a google</a>";
let formulario = document.querySelector("form");
console.log(formulario.innerHTML);

titulo.style.color = "red";
titulo.style.display = "none"

titulo.className = "container row";
titulo.setAttribute("class", "titulo1");

// let nombre1 = prompt("cual es tu nombre?");

class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio
    }
}
let listaProductos = [
    {nombre: "televisor", categoria: "electro", precio: 3000},
    {nombre: "computadora", categoria: "electro", precio: 2000},
    {nombre: "todtadora", categoria: "electro", precio: 500}
];
const guardarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let precio = parseInt(document.getElementById("precio").value);

    let nuevoProd = new Producto(nombre, categoria,precio)
    listaProductos.push(nuevoProd);
}

//agregar elementos - createElement
// let nodoNuevo = document.createElement("div");
// nodoNuevo.innerHTML = "<h1>este es un h1 dentro del div</h1>";
// document.getElementById("prods").append(nodoNuevo);
// console.log(nodoNuevo);


listaProductos.forEach(el => {
    let nodo = document.createElement("div");
    nodo.innerHTML = `
        <h3>${el.nombre}</h3>
        <p>${el.categoria}</p>
        <p>Precio $${el.precio}</p>
    `
    document.getElementById("prods").appendChild(nodo);
})