//Experimentos con EventListener. (A tener en cuenta para la funcionalidad de multiple estilo)
//
const soyyo = document.getElementById("styles-btt");
const background = document.getElementById("cc-contnr");

soyyo.addEventListener("click", function () {
  as.classList.add("cc-color-other");
  as.classList.remove("cc-color");
});
window.addEventListener("resize", function () {
  //Actualiza el tamaño de la clase all
  //con respecto al tamaño del disp
  let w = window.innerWidth;
  let divs = document.querySelectorAll(".all");
  divs.forEach((element) => {
    element.setAttribute("width", w - 32);
  });
});
