import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/Educacion.model';
import { Experiencias } from 'src/app/model/Experiencias.model';
import { Persona } from 'src/app/model/Persona.model';
import { Proyectos } from 'src/app/model/Proyectos.model';
import { PersonaService } from 'src/app/services/auth/persona.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css'],
})
export class MainInfoComponent {
  @ViewChild('editPersona') content!: TemplateRef<any>;

  message = '';
  closeResult: string = '';
  editPersonForm!: FormGroup;
  isSessionOn = parseInt(
    localStorage.getItem('isSessionOn')?.toString() as string
  );
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
  constructor(
    public personaService: PersonaService,
    public modalService: NgbModal,
    public fb: FormBuilder,
    public imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });

    this.editPersonForm = this.fb.group({
      nombre: '',
      titulo: '',
      provincia: '',
      pais: '',
      sobremi: '',
      profileImg: '',
    });
  }

  openEditPersona(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

    this.editPersonForm.patchValue({
      nombre: this.persona.nombre,
      titulo: this.persona.ocupacion,
      provincia: this.persona.provincia,
      pais: this.persona.pais,
      sobremi: this.persona.sobreMi,
      imgProf: this.persona.profileImg,
    });
  }

  private getDismissReason(reason: any): string {
    this.message = '';
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  uploadImage(event: any) {
    const id = 1;
    let extencion = this.handleExtencionChange(event.target.files[0].name);
    const name = 'perfil_' + id + '.' + extencion;
    this.imageService.uploadImage(event, name);
  }

  submitChange() {
    if (this.editPersonForm.valid) {
      let ob = this.editPersonForm.value;
      // ID setted a 1, solo una persona existe en la tabla
      let img;
      if (ob.profileImg === '') {
        img = this.persona.profileImg;
      } else {
        img = 'perfil_1.' + this.handleExtencionSub(ob.profileImg);
      }
      let pers = new Persona(
        ob.nombre,
        img,
        this.persona.email,
        ob.pais,
        ob.provincia,
        ob.titulo,
        ob.sobremi,
        this.persona.educacion,
        this.persona.experiencias,
        this.persona.proyectos,
        1
      );
      this.personaService.updatePersona(pers).subscribe((result) => {
        this.ngOnInit();
      });
      this.modalService.dismissAll();
    } else {
      this.message = 'Ingrese todos los valores necesarios';
    }
  }

  handleExtencionChange(string: string): string {
    let start = string.split('.');
    return start[start.length - 1];
  }

  handleExtencionSub(string: string): string {
    let start = string.split('\\');
    let ext = start[start.length - 1].split('.')[1];
    return ext;
  }
}
