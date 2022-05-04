// console.log("Bienvenidos")
// console.log("==============")

// setTimeout(()=>{
//     console.log("Este es el curso de js")
//     console.log("======================")
// }, 0)

// console.log("clase de asincronismo")


// const promesa = new Promise((resolve, reject)=> {
//     const num = Math.floor(Math.random()*10);
//     setTimeout(()=>{
//         num > 5 ? resolve(num) : reject(new Error("Es menor a 5"))
//     },3000)
// })

// //3 metodos para concatenar!
// //1 - then() - lo que ejecuta si la promesa se resuelve
// //2 - catch() - lo que ejecuta si la promesa se rechaza
// //3 - finally() - se ejecuta siempre al final.
// promesa
//     .then(number => number)
//     .then(resultado => console.log(resultado*5))
//     .catch(error => console.log(error))
//     .finally(()=>console.log("fin del proceso"))

const llamarDatos = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(listaProductos)
        },5000)
    })
}

let productos = [];
//generamos la vista
const mostrarProductos = (array) => {
    for (const prod of array) {
        let nodo = document.createElement("div");
        nodo.innerHTML = `
            <h3>${prod.title}</h3>
            <p>${prod.description}</p>
            <p>$${prod.price}</p>
        `
        document.querySelector("#datos").appendChild(nodo)
    }
}

llamarDatos()
    .then((resultado)=>{
        productos = resultado;
        mostrarProductos(productos)
    })