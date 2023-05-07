export class Proyectos {
  idProy: Number;
  nombreProyecto: String;
  fecStart: String;
  proyectImg: String;
  descripcion: String;
  constructor(
    idProy: Number,
    nombreProyecto: String,
    fecStart: String,
    proyectImg: String,
    descripcion: String
  ) {
    this.idProy = idProy;
    this.nombreProyecto = nombreProyecto;
    this.fecStart = fecStart;
    this.proyectImg = proyectImg;
    this.descripcion = descripcion;
  }
}


