function abrirMenu(){
    const nav = document.getElementById("nav");
    const altura = nav.clientHeight * (opciones.length + 1);
    nav.style.height = `${altura}px`;
}
function cerrarMenu(){
    const nav = document.getElementById("nav");
    const altura = document.getElementById("botonMenu").clientHeight;
    nav.style.height = `${altura}px`;
}
function abrirOCerrar(){
    const tamanioVentana = window.matchMedia("(max-width: 599px)");
    if (tamanioVentana.matches) {
        if (abierto) {
            cerrarMenu();
            abierto = false;
        }
        else {
            abrirMenu();
            abierto = true;
        };
    };
}
let abierto = false;
const botonMenu = document.getElementById("botonMenu");
const opciones = document.getElementsByClassName("opcionNav");
botonMenu.addEventListener("click", abrirOCerrar);
for (let index = 0; index < opciones.length; index++) {
    opciones[index].addEventListener("click", abrirOCerrar);
};