
var figura = document.getElementById("Figura")

function circulo() {
    figura.classList.toggle("circulo")
}

function rectangulo() {
    figura.classList.toggle("rectangulo")
}

function rombo() {
    figura.classList.toggle("rombo")
}

function imagen() {
    figura.classList.toggle("imagen")
}

function gif() {
    figura.classList.toggle("gif")
}

function triangulo() {
    figura.classList.toggle("triangulo")
}

function hoja() {
    figura.classList.toggle("hoja")
}

function pacman() {
    figura.classList.toggle("pacman")
}

function luna() {
    figura.classList.toggle("luna")
}

function huevo() {
    figura.classList.toggle("huevo")
}

function trapecio() {
    figura.classList.toggle("trapecio")
}

function moveup() {
    figura.classList.toggle("moveup")
}

function moveleft() {
    figura.classList.toggle("moveleft")
}

function movebutton() {
    figura.classList.toggle("movebutton")
}

function moveright() {
    figura.classList.toggle("moveright")
}

function panelsuperior() {
    figura.classList.toggle("panelsuperior")
}

function panellateral() {
    figura.classList.toggle("panellateral")
}

function cambiarfondo() {

    const cambiarfondo = document.querySelector(".cambiarfondo");

    cambiarfondo.classList.toggle("active")
}

function cambiarcolor() {
    const cambiarcolorleft = document.querySelector(".left");
    const cambiarcolorrigth = document.querySelector(".right");

    cambiarcolorleft.classList.toggle("active");
    cambiarcolorrigth.classList.toggle("active");
  }

function run () {
    figura.classList.toggle("run")
}

function panellateral() {
    const panel = document.querySelector(".panel-lateral");

    panel.classList.toggle("active");
}