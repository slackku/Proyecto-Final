//Experimentos con EventListener. (A tener en cuenta para la funcionalidad de multiple estilo)
//
const soyyo = document.getElementById("styles-btt");
const background = document.getElementById("cc-contnr");

soyyo.addEventListener("click", function () {
  as.classList.add("cc-color-other");
  as.classList.remove("cc-color");
});
