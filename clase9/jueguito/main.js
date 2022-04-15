const codigos = {
    izquierda: 37,
    arriba: 38,
    derecha: 39,
    abajo: 40
}

const estadoJugador = {
    velocidad: 100,
    mostrar: true,
    top: 0,
    left: 0
}

const desaparecer = document.getElementById("desaparecer");
const jugador = document.getElementById("jugador");

desaparecer.onclick = () => {
    if (estadoJugador.mostrar) {// si es true - lo voy a desaparecer
        jugador.style.opacity = 0;
        estadoJugador.mostrar = false;
    } else {//si es false - entonces lo aparecemos
        jugador.style.opacity = 1;
        estadoJugador.mostrar = true;
    }
}

const mover = (e) => {
    switch(e.keyCode) {
        case codigos.arriba:
            estadoJugador.top -= estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";
            break;
        case codigos.abajo:
            estadoJugador.top += estadoJugador.velocidad;
            jugador.style.top = estadoJugador.top + "px";
            break;
        case codigos.izquierda:
            estadoJugador.left -= estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        case codigos.derecha:
            estadoJugador.left += estadoJugador.velocidad;
            jugador.style.left = estadoJugador.left + "px";
            break;
        default:
            alert("solo podes usar flechas");
        }
}

window.addEventListener("keydown",mover);