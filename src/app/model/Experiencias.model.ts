export class Experiencias {
  idExp?: Number;
  nombreEmp: String;
  puesto: String;
  fecStart: String;
  fecEnd: String;
  constructor(
    nombreEmp: String,
    puesto: String,
    fecStart: String,
    fecEnd: String,
    idExp?: Number
  ) {
    this.idExp = idExp;
    this.nombreEmp = nombreEmp;
    this.puesto = puesto;
    this.fecStart = fecStart;
    this.fecEnd = fecEnd;
  }
}
