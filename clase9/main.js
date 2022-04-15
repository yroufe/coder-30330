const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

// ESCUCHAMOS EVENTOS - 3 maneras
// 1 - metodo llamado addEventListener(EVENTO, FUNCION)
//boton.addEventListener("click",escribir);
// boton.addEventListener("click", ()=>{
//     escribir();
// })

// 2 - FORMA REDUCIDA - el evento es el metodo
// boton.onclick = () => {escribir()}

// 3 - en el html - inline

/* 2 tipos de eventos - mecanicos y de logica 

MECANICOS - mouse o con el teclado

mouse - mouseover, mouseout, mousemove
*/
// boton.addEventListener("mousemove", ()=>{
//     console.log("hola");
// })
// teclado - keydown
const texto = document.querySelector("#texto");

// texto.onkeydown = (e)=> {
//     console.log(texto.value);
//     let tecla = e.keyCode;
//     console.log(tecla);
// }

//LOGICA - onchange, input
// texto.onchange = ()=>{}
// texto.addEventListener("change",()=>{
//     console.log(`el valor cambio a ${texto.value}`);
// })

// const select = document.querySelector("#select");
// select.addEventListener("change",()=>{
//     console.log(select.value);
// })
texto.addEventListener("input",()=>{
    console.log(texto.value);
    if (texto.value == "") {
        texto.className = "vacio";
    } else {
        texto.className = "validado"
    }
})

boton.onclick = (e)=>{
    e.preventDefault();
    console.log("hice submit");
}
