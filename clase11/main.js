/*
    ENTIDADES
*/
class Residente {
    constructor(dni,nombre,piso, depto) {
        this.dni = dni;
        this.nombre = nombre;
        this.piso = piso;
        this.depto = depto;
        this.listaNegra = false;
    }
}
/*
    VARIABLES
*/
let listaResidentes = [];
let btnSave = document.getElementById("btnSave");
/*
    FUNCIONES
*/
// 1- crear el residente
const crearResidente = () => {
    let dni = document.querySelector("#dni").value;
    let nombre = document.querySelector("#nombre").value;
    let piso = document.querySelector("#piso").value;
    let depto = document.querySelector("#depto").value;

    const nuevoResidente = new Residente(dni, nombre, piso, depto);
    console.log(nuevoResidente);

    let listaNueva = [];
    if (localStorage.getItem("Residentes") != null) {
        listaNueva = JSON.parse(localStorage.getItem("Residentes"));
        listaNueva.push(nuevoResidente);
        localStorage.setItem("Residentes",JSON.stringify(listaNueva));
    } else {
        listaResidentes.push(nuevoResidente);
        localStorage.setItem("Residentes",JSON.stringify(listaResidentes));
    }
    listaResidentes.push(nuevoResidente);
    return nuevoResidente
}

const verificarStorage = () => {
    let lista = [];
    if(localStorage.getItem("Residentes") != null) {
        lista = JSON.parse(localStorage.getItem("Residentes"));
        return lista;
    }
}

const guardar = () => {
    crearResidente();
    if (verificarStorage() != undefined) {
        localStorage.setItem("Residentes", JSON.stringify(verificarStorage()));
    } else {
        localStorage.setItem("Residentes", JSON.stringify(listaResidentes));
    }
}

const eliminarResidente = (dni) => {
    let listaVieja = JSON.parse(localStorage.getItem("Residentes"));
    let listaFiltrada = listaVieja.filter(obj => obj.dni != dni);
    localStorage.setItem("Residentes", JSON.stringify(listaFiltrada));
    location.reload();
}


const imprimirDatos = () => {
    if (verificarStorage() != undefined) {
        verificarStorage().forEach(obj => {
            document.getElementById("tabla").innerHTML += `
                <tr>
                    <td>${obj.dni}</td>
                    <td>${obj.nombre}</td>
                    <td>${obj.piso}</td>
                    <td>${obj.depto}</td>
                    <td>${obj.listaNegra}</td>
                    <td><button onclick="eliminarResidente(${obj.dni})">X</button></td>
                </tr>
            `
        })
    }
}

/*
    EVENTOS
*/
btnSave.addEventListener("click", ()=>{
    guardar();
})
imprimirDatos();