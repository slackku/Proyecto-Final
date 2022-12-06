window.addEventListener("resize", function () {
  let text = document.querySelectorAll(".btn-group .btn");
  if (this.window.innerWidth < 532) {
    text[0].innerHTML = "Intereses";
    text[1].innerHTML = "Añadir";
    text[2].innerHTML = "Más";
  }
  if (this.window.innerWidth > 532) {
    text[0].innerHTML = "Tengo interes en";
    text[1].innerHTML = "Añadir Seleccion";
    text[2].innerHTML = "Más";
  }
});
