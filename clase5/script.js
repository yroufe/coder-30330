// literal

// const objeto = {
//     propiedad: valor,
//     propiedad2: valor,
// }

const mascota1 = {
    nombre: "lucky",
    tipo: "perro",
    edad: 2,
    dueno: {
        nombre: "Juan",
        apellido: "Perez",
        direccion: "calle 1 20"
    },
    castrado: false
}

//muestro el objeto
console.log(mascota1);

//mostrar la propiedad - 1 - no muy usada
console.log(mascota1["nombre"]);

//2 - las mas usada
console.log(mascota1.dueno);

console.log(mascota1.dueno.apellido);

mascota1.castrado = true;
console.log(mascota1);

//constructores
class Mascota {
    constructor(nombre, tipo, edad, dueno, castrado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.dueno = dueno;
        this.castrado = castrado;
        this.puntos = 0;
    }
    bio() {
        let resumen = `Esta mascota se llama ${this.nombre} y tiene ${this.edad} anios`;
        return resumen;
    };
    castrar() {
        if (this.castrado == false) {
            this.castrado = true;
        }
    };
    agregarPuntos(nuevoPuntaje) {
        this.puntos += nuevoPuntaje;
    }
}

const daisy = new Mascota("daisy","perro",2,"Yael",true);
const darwin = new Mascota("darwin","gato",4,"Yael",true);
console.log(daisy.bio());



const crearMascota = () => {
    let nombreMascota = prompt("cual es el nombre?");
    let tipoMascota = prompt("cual es el tipo?");
    let edadMascota = parseInt(prompt("cual es la edad?"));
    let nombreDuenoMascota = prompt("cual es el nombre del dueno?");
    let castradoMascota = confirm("esta castrado?");

    const mascota2 = new Mascota(nombreMascota,tipoMascota,edadMascota,nombreDuenoMascota,castradoMascota);
    console.log(mascota2);
    return mascota2;
}


daisy.agregarPuntos(50);


daisy.castrar()


/*
1 - crear una clase con constructor de productos 
acepta nombre, categoria, preio y stock

2 - crear un metodo que aplique un descuento del 
10% si el precio es 
mayor a mil y mostrar el precio final

3 - crear un metodo de comprar, que se va a fijar si el producto esta en stock.
si esta en stock, le va a restar
si no esta en stock, da mensaje - no hay.
*/

class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    calcularDescuento(){
        if(this.precio >1000) {
            this.precio = this.precio * 0.9;
            return this.precio;
        }
    }
}

const tele = new Producto("televisor","electro",3000, 10);


