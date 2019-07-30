$(document).ready(function() {
    $(".anim").fadeIn(2500);
});

$(document).ready(function() {
    $(".anim1").fadeIn(3000);
});

$(document).ready(function() {
    $(".anim3").fadeIn(3000);
});



// efectos para el blog
$(function() {

    var listaTexto = ["beneficios para ti", "posiciona tu marca", "pixel de facebook"]
    maquinaLista("typer", 250, listaTexto, 0);

    function maquinaLista(contenedor, intervalo, listaTexto, indice) {
        if (indice == listaTexto.length) {
            indice = 0;
        }
        maquina2(contenedor, listaTexto[indice], intervalo, listaTexto, indice);
    }

    function maquina2(contenedor, texto, intervalo, listaTexto, indiceLista) {
        var indiceTexto = 0;
        var finalTexto = false;
        timer = setInterval(function() {
            if (indiceTexto == texto.length && finalTexto == false) {
                finalTexto = true;
            }

            if (finalTexto == false) indiceTexto++
                else indiceTexto--;
            mostrarEliminarTexto(contenedor, texto, indiceTexto, finalTexto);
            if (finalTexto == true && indiceTexto == 0) {
                clearInterval(timer);
                maquinaLista(contenedor, intervalo, listaTexto, indiceLista + 1);
            }
        }, intervalo)
    }

    function mostrarEliminarTexto(contenedor, texto, i, finalTexto) {

        if (finalTexto) {
            $("#" + contenedor).html(texto.substr(0, i--) + "_");
        } else {
            $("#" + contenedor).html(texto.substr(0, i++) + "_");
        }
    }



});