window.addEventListener("resize", function () {
  var image = document.querySelector(".logardo");
  if (window.innerWidth < 600) {
    image.src = "img/asdmini.png";
  }
  let text = document.querySelectorAll(".btn-group .btn");
  if (this.window.innerWidth < 520) {
    text[0].innerHTML = "Intereses";
    text[1].innerHTML = "Añadir";
    text[2].innerHTML = "Más";
  }
  if (this.window.innerWidth > 520) {
    text[0].innerHTML = "Tengo interes en";
    text[1].innerHTML = "Añadir Seleccion";
    text[2].innerHTML = "Más";
    image.src = "img/asd.png";
  }
});
