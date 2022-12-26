
// Definicion inicial de ejercicio:

// function pintar() {
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


//PARTE 1:
// Ajuste para evitar seleccionar el elemento nuevamente dentro de la función:

ele = document.getElementById("ele1")
ele.addEventListener("click", function () {
    ele.style.backgroundColor = 'yellow'
});


//PARTE 2:
// Ajuste para que la funcion reciba un color como parametro (verde por defecto):

function pintar(color = 'green') {
    ele2 = document.getElementById("ele2")
    ele2.style.backgroundColor = color;
}
ele2 = document.getElementById("ele2")
ele2.addEventListener("click", function () {

    // pintar el color por defecto:
    pintar()

    // pintar el color por parametro:
    // pintar('yellow')
})


