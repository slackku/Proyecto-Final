import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Persona } from 'src/app/model/Persona.model';
import { LoginRequest } from './loginRequest';
import { Educacion } from 'src/app/model/Educacion.model';
import { Experiencias } from 'src/app/model/Experiencias.model';
import { Proyectos } from 'src/app/model/Proyectos.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL + 'persona/traer/1');
  }

  public login(loginRequest: LoginRequest): Observable<Persona> {
    return this.http
      .post<Persona>(this.URL + 'login', loginRequest)
      .pipe(catchError(this.errorHandler));
  }

  public addEducacion(educacion: any): Observable<Educacion> {
    return this.http.post<Educacion>(
      this.URL + 'persona/add-educ/1',
      educacion
    );
  }

  public addExperiencia(experiencia: Experiencias): Observable<Experiencias> {
    return this.http.post<Experiencias>(
      this.URL + 'persona/add-exp/1',
      experiencia
    );
  }

  public addProyecto(proyecto: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.URL + 'persona/add-proy/1', proyecto);
  }

  public updatePersona(persona: Persona): Observable<Persona> {
    let id = persona.id;
    return this.http
      .put<Persona>(this.URL + 'persona/modificar/' + id, persona)
      .pipe(catchError(this.errorHandler));
  }

  public updateEduc(educacion: Educacion): Observable<Educacion> {
    let id = educacion.idEduc;
    return this.http
      .put<Educacion>(this.URL + 'educ/modificar/' + id, educacion)
      .pipe(catchError(this.errorHandler));
  }

  public updateExp(experiencia: Experiencias): Observable<Experiencias> {
    let id = experiencia.idExp;
    return this.http
      .put<Experiencias>(this.URL + 'exp/modificar/' + id, experiencia)
      .pipe(catchError(this.errorHandler));
  }

  public updateProy(proyecto: Proyectos): Observable<Proyectos> {
    let id = proyecto.idProy;
    return this.http
      .put<Proyectos>(this.URL + 'proy/modificar/' + id, proyecto)
      .pipe(catchError(this.errorHandler));
  }

  public deleteProyecto(id: number): Observable<Proyectos> {
    return this.http
      .delete<Proyectos>(this.URL + 'persona/remove-proy/' + id)
      .pipe(catchError(this.errorHandler));
  }

  public deleteEducacion(id: number): Observable<Educacion> {
    return this.http
      .delete<Educacion>(this.URL + 'persona/remove-educ/' + id)
      .pipe(catchError(this.errorHandler));
  }

  public deleteExperiencia(id: number): Observable<Experiencias> {
    return this.http
      .delete<Experiencias>(this.URL + 'persona/remove-exp/' + id)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    // Si se genera un error de cualquier tipo con respecto al backend,
    // la ""Sesion"" sera pasada a 0, cerrandola
    let isSO = localStorage.getItem('isSessionOn');
    window.alert('Datos invalidos. Intente de nuevo');
    if (isSO === '1') {
      localStorage.setItem('isSessionOn', '0');
    }
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error);
    } else if (error.status === 304) {
      console.error('No ha realizado ninguna modificacion', error.status);
    } else {
      console.error('Backend retorno el codigo de estado ', error.status);
    }
    return throwError(
      () => new Error('Algo fallo, por favor intente nuevamente')
    );
  }
}
