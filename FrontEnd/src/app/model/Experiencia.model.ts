export class Experiencia {
  idExp: Number;
  nombreEmp: String;
  puesto: String;
  fecStart: String;
  fecEnd: String;
  constructor(
    idExp: Number,
    nombreEmp: String,
    puesto: String,
    fecStart: String,
    fecEnd: String
  ) {
    this.idExp = idExp;
    this.nombreEmp = nombreEmp;
    this.puesto = puesto;
    this.fecStart = fecStart;
    this.fecEnd = fecEnd;
  }
}
