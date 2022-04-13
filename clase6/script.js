//ARRAYS

// //--------------0---------1------2--3----4----===============5==================---==6==
// //                                                                                  0--1
// let lista = ["texto1", "texto2", 2, 7, false, {nombre:"Maria", apellido: "Perez"}, [1, 3], true, "texto3"];

//  //console.log(lista);
// // console.log(lista[1]);
// // console.log(lista[5].nombre);
// // console.log(lista[6][1]);

// //console.log(lista.length);

// for(let i = 0; i<lista.length; i++ ) {
//     console.log(lista[i]);
// }


// let listaSuper = ["manzana", "agua","huevos", "leche", "jabon"];
// console.log(listaSuper);

// //AGREGAMOS ELEMENTOS AL ARRAY
// // 1 - push - agrega elementos al final del array
// listaSuper.push("pan");
// console.log(listaSuper);

// // 2 - unshift - agrega al principio
// listaSuper.unshift("galletas");
// console.log(listaSuper);

// //ELIMINAMOS ELEMENTOS DEL ARRAY
// // 1 - shift - borrar el primer elemnto del array
// listaSuper.shift();
// console.log(listaSuper);

// //2 - pop - borra el ultimo elemento
// listaSuper.pop();
// console.log(listaSuper);

// //3 - splice - toma 2 parametros - 1 que le dice en que posicion empieza, y 2 - cuantos elimina
// listaSuper.splice(1, 2);
// console.log(listaSuper);

// // - JOIN - convierte mi array en un string
// let listaString = listaSuper.join(" - ");
// console.log(listaString);

// // - CONCAT - 
// let listaFerreteria = ["martillo","clavos"];
// let listaCompleta = listaSuper.concat(listaFerreteria);
// console.log(listaCompleta);

// //slice - 
// let listaCorta = listaCompleta.slice(1, 4);
// console.log(listaCorta);

// //indexOf - nos va a dar la posicion del elemento que buscamos
// console.log(listaCompleta.indexOf("leche"));
// console.log(listaCompleta.indexOf("aceite"));

// // includes - 
// console.log(listaCompleta.includes("aceite"));
// console.log(listaCompleta.includes("manzana"));

// if(!listaCompleta.includes("frutilla")) {
//     listaCompleta.push("frutilla");
// }


// let listaNombres = ["juan","camila","romina","damian"];
// let cantidad = 5;

// do {
//     let nombreNuevo = prompt("dame un nombre");
//     listaNombres.push(nombreNuevo);
//     console.log(listaNombres.length)
// } while (listaNombres.length != cantidad);


// const eliminar = (item) => {
//     let index = listaNombres.indexOf(item); // si da -1 es porque no existe el elemento

//     //si existe - lo borramos
//     if (index != -1) {
//         listaNombres.splice(index, 1);
//     }
// }

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio
    }
}

let listaProductos = [];

const agregarProd = () => {
    let nombre = prompt("Nombre del producto");
    let precio = parseFloat(prompt("Cual es el precio?"));
    let prod = new Producto(nombre,precio);
    listaProductos.push(prod);
}

listaProductos.push(new Producto("compu", 2000));
listaProductos.push(new Producto("televisor", 1000));
listaProductos.push(new Producto("ventilador", 500));
listaProductos.push(new Producto("tostadora", 200));

console.log(listaProductos)

//for
for (let i=0; i<listaProductos.length; i++) {
    //sentencias
}
// for of - solo para arrays de objetos
for (const producto of listaProductos) {
    console.log(`este objeto es ${producto.nombre} y su valor es de $${producto.precio}`)
    for(const prop in producto) {
        console.log(`En este objeto la propiedad ${prop} tiene el valor de ${producto[prop]}` )
    }
}

