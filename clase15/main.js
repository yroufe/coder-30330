const boton = document.querySelector("#btn");
const container = document.querySelector(".container");

// const obtenerDatos = ()=>{
//     // fetch(url, configuracionOpcional)
//     fetch("prueba.txt")
//         .then(response => response.text())
//         .then(pepito => container.innerHTML += `<p>${pepito}</p>`)
//         .catch(error => console.log(error))
// }

// const obtenerDatos = ()=>{
//     fetch("https://randomuser.me/api")
//         .then(response => response.json())
//         .then((result) => {
//             console.log(result)
//             let datos = result.results;
//             datos.forEach(user => {
//                 container.innerHTML += `
//                     <img src="${user.picture.medium}">
//                     <h3>${user.name.first}</h3>
//                     <p>${user.cell}</p>
//                     <p>${user.email}</p>
//                 `
//             })
//         })
//         .catch(error => console.log(error))
// }

const url = "https://jsonplaceholder.typicode.com/posts"
const obtenerDatos = ()=>{
    fetch(url,{
        method: "POST",
        body: JSON.stringify({
            title: "Nuevo post",
            body: "post de prueba",
            userId: 53
        }),
        headers: {'content-type':"application/json"}
    })
    .then(response => response.json())
    .then(data => console.log(data))
}


boton.onclick = () =>{
    obtenerDatos();
}