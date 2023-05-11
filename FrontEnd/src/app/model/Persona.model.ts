import { Educacion } from './Educacion.model';
import { Experiencias } from './Experiencias.model';
import { Proyectos } from './Proyectos.model';

export class Persona {
  id?: Number;
  nombre: String;
  profileImg: String;
  email: String;
  pais: String;
  provincia: String;
  ocupacion: String;
  sobreMi: String;
  educacion: Array<Educacion>;
  experiencias: Array<Experiencias>;
  proyectos: Array<Proyectos>;

  constructor(
    nombre: String,
    profileImg: String,
    email: String,
    pais: String,
    provincia: String,
    ocupacion: String,
    sobreMi: String,
    educacion: Array<Educacion>,
    experiencias: Array<Experiencias>,
    proyectos: Array<Proyectos>,
    id?: Number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.profileImg = profileImg;
    this.email = email;
    this.pais = pais;
    this.provincia = provincia;
    this.ocupacion = ocupacion;
    this.sobreMi = sobreMi;
    this.educacion = educacion;
    this.experiencias = experiencias;
    this.proyectos = proyectos;
  }
}
