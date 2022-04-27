$(() => {

const jugadores = [
    {nombre: "Juan",nivel:12,id:1,icon:"avatar-1.png"},
    {nombre: "Ana",nivel:20,id:2,icon:"avatar-2.png"},
    {nombre: "Jorge",nivel:5,id:3,icon:"avatar-3.png"}
]

for (const jugador of jugadores) {
    $("#contenedor-usuarios").append(`
        <div class="caja-usuario" id="${jugador.id}">
            <img src="assets/img/${jugador.icon}">
            <h4>Jugador</h4>
            <p>${jugador.nombre}</p>
            <p>Nivel: ${jugador.nivel}</p>

        </div>
    `)
}

//metodos comunes de jQuery
$("#titulo").css("color","green");
$("h2").addClass("italic");
$("h2").removeClass("italic");
$("h2").toggleClass("clase");
$("h2").attr("id","nuevo-id");
console.log($("h2").attr("id"));
$("#nombre").val("Tomas");




$(".caja-usuario").on("click",function(e){
    $(this).toggleClass("seleccionado")
})

$("#dblclick").on("dblclick",function(){
    $(".caja-usuario").toggleClass("hide");
})

$("#nombre").on("keyup", function(){
    verificar();
})
$("#nivel").on("keyup", function(){
    verificar();
})

const verificar = () => {
    if ($("#nombre").val().length > 0 && $("#nivel").val().length > 0) {
        $("small").removeClass("show");
    } else {
        $("small").addClass("show");
    }
}


$("#form").submit(function(e){
    e.preventDefault();
    const numeroJugadores = $(".caja-usuario").length;
    $("#contenedor-usuarios").append(`
        <div class="caja-usuario" id="${numeroJugadores + 1}">
            <img src="assets/img/avatar-${numeroJugadores + 1}.png">
            <h4>Jugador</h4>
            <p>${$("#nombre").val()}</p>
            <p>Nivel: ${$("#nivel").val()}</p>
        </div>
    `)
    $(this)[0].reset();


})

$("#trigger").on("click",function(){
    $(".caja-usuario").trigger("click");
})


});