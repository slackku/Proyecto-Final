import { Educacion } from './Educacion.model';
import { Experiencia } from './Experiencia.model';
import { Proyectos } from './Proyectos.model';

export class Persona {
  id?: Number;
  nombre: String;
  imgProfile: String;
  imgBanner: String;
  email: String;
  pais: String;
  provincia: String;
  ocupacion: String;
  sobreMi: String;
  educacion: Array<Educacion>;
  experiencias: Array<Experiencia>;
  proyecto: Array<Proyectos>;

  constructor(
    nombre: String,
    imgProfile: String,
    imgBanner: String,
    email: String,
    pais: String,
    provincia: String,
    ocupacion: String,
    sobreMi: String,
    educacion: Array<Educacion>,
    experiencias: Array<Experiencia>,
    proyectos: Array<Proyectos>
  ) {
    this.nombre = nombre;
    this.imgBanner = imgBanner;
    this.imgProfile = imgProfile;
    this.email = email;
    this.pais = pais;
    this.provincia = provincia;
    this.ocupacion = ocupacion;
    this.sobreMi = sobreMi;
    this.educacion = educacion;
    this.experiencias = experiencias;
    this.proyecto = proyectos;
  }
}
