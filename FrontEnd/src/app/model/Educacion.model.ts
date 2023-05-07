export class Educacion {
  idEduc: Number;
  nombreInst: String;
  carrera: String;
  fecStart: String;
  fecEnd: String;
  constructor(
    idEduc: Number,
    nombreInst: String,
    carrera: String,
    fecStart: String,
    fecEnd: String
  ) {
    this.idEduc = idEduc;
    this.nombreInst = nombreInst;
    this.carrera = carrera;
    this.fecStart = fecStart;
    this.fecEnd = fecEnd;
  }
}

