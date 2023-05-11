export class Educacion {
  idEduc?: Number;
  nombreInst: String;
  carrera: String;
  fecStart: String;
  fecEnd: String;
  constructor(
    nombreInst: String,
    carrera: String,
    fecStart: String,
    fecEnd: String,
    idEduc?: Number
  ) {
    this.idEduc = idEduc;
    this.nombreInst = nombreInst;
    this.carrera = carrera;
    this.fecStart = fecStart;
    this.fecEnd = fecEnd;
  }
}
