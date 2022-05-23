
function mostrarCategoriasDesplegable(){
    const activar = document.querySelector(".desplegable-categorias");
    activar.style.display = "flex"
}
function ocultarCategoriasDesplegable(){
    const ocultar = document.querySelector(".desplegable-categorias");
    ocultar.style.display = "none"
}
function mostrar(clase) {
    debugger
    const activar = document.querySelector(clase);
    activar.style.display ="flex"
}
function ocultar(clase) {
    const ocultar = document.querySelector(`.${clase}`);
    ocultar.style.display ="none"
}