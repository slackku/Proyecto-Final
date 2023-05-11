import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion.model';
import { Experiencias } from 'src/app/model/Experiencias.model';
import { Persona } from 'src/app/model/Persona.model';
import { Proyectos } from 'src/app/model/Proyectos.model';
import { PersonaService } from 'src/app/services/auth/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private personaService: PersonaService){
  }

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

  ngOnInit(){

    this.personaService.getPersona().subscribe(
      (data) =>{
        this.persona = data;
      }
    )

  }
}
