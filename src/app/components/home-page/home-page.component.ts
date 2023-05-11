import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion.model';
import { Experiencias } from 'src/app/model/Experiencias.model';
import { Persona } from 'src/app/model/Persona.model';
import { Proyectos } from 'src/app/model/Proyectos.model';
import { PersonaService } from 'src/app/services/auth/persona.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  persona: Persona = new Persona(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    new Array<Educacion>(),
    new Array<Experiencias>(),
    new Array<Proyectos>()
  );

  editExp: any = null;

  constructor(public personaService: PersonaService) {}


  ngOnInit() {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }
}
