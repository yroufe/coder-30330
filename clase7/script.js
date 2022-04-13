// function sumarRango(start, end) {
//     let total = 0;
//     for(let i = start; i <= end; i++) {
//         total +=i;
//     }
//     return total;
// }
// //ABSTRACCION - abstraccion de valores
// console.log(sumarRango(1,10));

//ABSTRACCION - abstraccion de acciones - FUNCIONES DE ORDEN SUPERIOR
// 1 - funciones que retornan otra funcion

// function mayorQue(n) {
//     return (m) => m > n;
// }

// let mayorQue10 = mayorQue(10); //  (m) => m > 10
// console.log(mayorQue10(12)); //true
// let mayorQue100 = mayorQue(100); //  (m) => m > 100
// console.log(mayorQue100(56)); //true      56 > 100 - false

// 2 - funciones que aceptan funciones como parametros

// function porCadaElem(array, funcion) {
//     for(const el of array ) {
//         funcion(el);
//     }
// }

// let numeros = [1, 3, 6, 8];

// porCadaElem(numeros, console.log);

// let total = 0;
// function acumular(num) {
//     total += num;
// }

// porCadaElem(numeros, acumular);
// console.log(total);

// let duplicado = [];
// porCadaElem(numeros, (el) => {
//     duplicado.push(el*2);
// })
// console.log(duplicado);

// numeros.forEach((el) => {
//     console.log(el)
// })

let listaProductos = [
    {nombre: "televisor", precio: 1000},
    {nombre: "computadora", precio: 2000},
    {nombre: "ventilador", precio: 500},
    {nombre: "tostadora", precio: 300},
    {nombre: "pochoclera", precio: 100}
];
listaProductos.forEach(producto => {
    let precioDescuento = producto.precio * 0.8;
    console.log(`el producto es ${producto.nombre} y su precio es $${precioDescuento}`)
})

//metodos de busqueda y transformacion
// 1 - FIND - solo trae el primer objeto que encuentra
// let search = prompt("que deseas buscar?");
// let buscar = listaProductos.find(obj => {
//     return obj.nombre == search;
// })
// console.log(buscar);

// 2 - FILTER - me va a dar todos los resultados
let buscarPrecio = listaProductos.filter(obj => obj.precio < 1000);
console.log(buscarPrecio);

// 3 - SOME - true o false
console.log(listaProductos.some(obj => obj.nombre == "ventilador"));

//transformacion - MAP
let listaNueva = listaProductos.map(obj => {
   return { 
        nombre: obj.nombre, 
        precio: obj.precio * 1.21,
    }
} );
console.log(listaNueva);

//REDUCE
let totalCarrito = listaProductos.reduce((acumulador, obj) => acumulador + obj.precio, 0);
console.log(totalCarrito);

//SORT
const animales = ["perro","gato", "elefante", "leon"];
console.log(animales.sort());
let numeros = [8, 3, 1, 5];
console.log(numeros.sort());
listaProductos.sort((a,b) => {
    if(a.nombre > b.nombre) {
        return 1
    }
    if(a.nombre < b.nombre) {
        return -1
    }
    return 0;
})
console.log(listaProductos)