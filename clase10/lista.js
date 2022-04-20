let mascotas = JSON.parse(localStorage.getItem("mascotas"));

for (const mascota of mascotas) {
    console.log(mascota.nombre);
}

