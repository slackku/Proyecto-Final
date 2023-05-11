import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/Educacion.model';
import { Experiencias } from 'src/app/model/Experiencias.model';
import { Persona } from 'src/app/model/Persona.model';
import { Proyectos } from 'src/app/model/Proyectos.model';
import { PersonaService } from 'src/app/services/auth/persona.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/services/image.service';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-extended-info',
  templateUrl: './extended-info.component.html',
  styleUrls: ['./extended-info.component.css'],
})
export class ExtendedInfoComponent implements OnInit {
  @ViewChild('content') content!: TemplateRef<any>;

  title: string = 'Agregar';
  labels = {
    ffield: '',
    sfield: '',
    tfield: '',
    cfield: '',
  };

  isSessionOn = parseInt(
    localStorage.getItem('isSessionOn')?.toString() as string
  );
  // Mensaje de error
  message!: string;
  // Option (Tipo de objeto a editar/modificar/elminar)
  public option?: Number;
  // Id del objeto a eliminar
  public deleteId!: Number;
  // Motivo por el cual se cerro el modal
  closeResult: string = '';
  editForm!: FormGroup;
  // Flag de si es requerido (Field de fecha final en agregar educ)
  isCFieldRequired: boolean = false;
  // Flag de si es requerido (Field de nombre img en agregar proyecto)
  isSFieldRequired: boolean = true;

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
    private modalService: NgbModal,
    private fb: FormBuilder,
    public imageService: ImageService
  ) {}

  ngOnInit() {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      first: ['', Validators.required],
      second: ['', Validators.required],
      third: ['', Validators.required],
      fourth: ['', Validators.required],
      proyectImg: [''],
    });
  }

  setOptionHandler(type: number) {
    this.option = type;
  }

  setOptionId(id: number) {
    this.deleteId = id;
  }

  setLabelsAndTittleAdd(type: number) {
    if (type === 1) {
      this.title = 'Agregar Educacion';
      this.labels.ffield = 'Carrera';
      this.labels.sfield = 'Nombre Institucion';
      this.labels.tfield = 'Fecha Inicio';
      this.labels.cfield = 'Fecha Fin';
    }
    if (type === 2) {
      this.title = 'Agregar Experiencia';
      this.labels.ffield = 'Puesto';
      this.labels.sfield = 'Nombre Empresa';
      this.labels.tfield = 'Fecha Inicio';
      this.labels.cfield = 'Fecha Fin';
    }
    if (type === 3) {
      this.title = 'Agregar Proyecto';
      this.labels.ffield = 'Nombre del Proyecto';
      this.labels.sfield = 'Imagen';
      this.labels.tfield = 'Fecha de Realizacion';
      this.labels.cfield = 'Descripcion';
    }
  }

  open(content: any, event: MouseEvent) {
    let target = event.target as HTMLInputElement;
    switch (target.getAttribute('data-add-type')) {
      case '1':
        this.isSFieldRequired = true;
        this.isCFieldRequired = false;
        this.setLabelsAndTittleAdd(1);
        this.setOptionHandler(1);
        break;
      case '2':
        this.isSFieldRequired = true;
        this.isCFieldRequired = true;
        this.setLabelsAndTittleAdd(2);
        this.setOptionHandler(2);
        break;
      case '3':
        this.isSFieldRequired = false;
        this.isCFieldRequired = true;
        this.setLabelsAndTittleAdd(3);
        this.setOptionHandler(3);
        break;
    }
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

  onSubmit(f: NgForm) {
    if (f.valid) {
      let obBuilded;
      switch (this.option) {
        case 1:
          obBuilded = new Educacion(
            f.value.ffield,
            f.value.sfield,
            f.value.tfield,
            f.value.cfield
          );
          this.personaService.addEducacion(obBuilded).subscribe((result) => {
            this.ngOnInit();
          });
          this.modalService.dismissAll();
          break;
        case 2:
          obBuilded = new Experiencias(
            f.value.ffield,
            f.value.sfield,
            f.value.tfield,
            f.value.cfield
          );
          this.personaService.addExperiencia(obBuilded).subscribe((result) => {
            this.ngOnInit();
          });
          this.modalService.dismissAll();
          break;
        case 3:
          let nombreImg;
          if (f.value.proyectImg != '') {
            nombreImg =
              'proyecto_' + this.handleExtencionSub(f.value.proyectImg);
          } else {
            nombreImg = 'img-sample.png';
          }
          obBuilded = new Proyectos(
            f.value.ffield,
            f.value.tfield,
            nombreImg,
            f.value.cfield
          );
          this.personaService.addProyecto(obBuilded).subscribe((result) => {
            this.ngOnInit();
          });
          this.modalService.dismissAll();
          break;
      }
    } else {
      this.message = 'Ingrese todos los valores necesarios';
    }
  }

  openEdit(contentEdit: any, event: MouseEvent, objeto: any) {
    let secondField = this.editForm.get('second');
    let target = event.target as HTMLInputElement;
    let type = parseInt(target.getAttribute('data-edit-type') as string);
    switch (type) {
      case 1:
        secondField?.enable();
        secondField?.setValidators(Validators.required);
        secondField?.updateValueAndValidity();
        this.setLabelsAndTittleEdit(1);
        this.handleCarreraEdit(objeto);
        break;
      case 2:
        secondField?.enable();
        secondField?.setValidators(Validators.required);
        secondField?.updateValueAndValidity();
        this.setLabelsAndTittleEdit(2);
        this.handleExperienciaEdit(objeto);
        break;
      case 3:
        secondField?.disable();
        this.setLabelsAndTittleEdit(3);
        this.handleProyectoEdit(objeto);
        break;
    }
    this.modalService.open(contentEdit, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
  }

  private setLabelsAndTittleEdit(type: number) {
    if (type === 1) {
      this.title = 'Editar Educacion';
      this.labels.ffield = 'Carrera';
      this.labels.sfield = 'Nombre Institucion';
      this.labels.tfield = 'Fecha Inicio';
      this.labels.cfield = 'Fecha Fin';
    }
    if (type === 2) {
      this.title = 'Editar Experiencia';
      this.labels.ffield = 'Puesto';
      this.labels.sfield = 'Nombre Empresa';
      this.labels.tfield = 'Fecha Inicio';
      this.labels.cfield = 'Fecha Fin';
    }
    if (type === 3) {
      this.title = 'Editar Proyecto';
      this.labels.ffield = 'Nombre del Proyecto';
      this.labels.sfield = 'Imagen';
      this.labels.tfield = 'Fecha de Realizacion';
      this.labels.cfield = 'Descripcion';
    }
  }

  private handleCarreraEdit(objeto: Educacion): void {
    this.setOptionHandler(1);
    this.editForm.patchValue({
      first: objeto.carrera,
      second: objeto.nombreInst,
      third: objeto.fecStart,
      fourth: objeto.fecEnd,
      id: objeto.idEduc,
    });
  }

  private handleExperienciaEdit(objeto: Experiencias): void {
    const secondField = this.editForm.get('second');
    this.setOptionHandler(2);
    this.editForm.patchValue({
      id: objeto.idExp,
      first: objeto.puesto,
      second: objeto.nombreEmp,
      third: objeto.fecStart,
      fourth: objeto.fecEnd,
    });
  }

  private handleProyectoEdit(objeto: Proyectos): void {
    this.setOptionHandler(3);
    this.editForm.patchValue({
      id: objeto.idProy,
      first: objeto.nombreProyecto,
      second: objeto.proyectImg,
      third: objeto.fecStart,
      fourth: objeto.descripcion,
      profileImg: '',
    });
  }

  onSave() {
    if (this.editForm.valid) {
      switch (this.option) {
        case 1:
          let educ = new Educacion(
            this.editForm.value.second,
            this.editForm.value.first,
            this.editForm.value.third,
            this.editForm.value.fourth,
            this.editForm.value.id
          );
          this.personaService.updateEduc(educ).subscribe((result) => {
            this.ngOnInit();
          });
          this.modalService.dismissAll();
          break;
        case 2:
          let exp = new Experiencias(
            this.editForm.value.second,
            this.editForm.value.first,
            this.editForm.value.third,
            this.editForm.value.fourth,
            this.editForm.value.id
          );
          this.personaService.updateExp(exp).subscribe((result) => {
            this.ngOnInit();
          });
          this.modalService.dismissAll();
          break;
        case 3:
          const secondField = this.editForm.get('second');
          secondField?.disable();
          let imgName: String;
          if (this.editForm.value.proyectImg.trim() === '') {
            let defName = this.persona.proyectos.find(
              (element) => element.idProy === this.editForm.value.id
            )?.proyectImg;
            imgName = defName as string;
          } else {
            imgName =
              'proyecto_' +
              this.handleExtencionSub(this.editForm.value.proyectImg);
          }
          let proy = new Proyectos(
            this.editForm.value.first,
            this.editForm.value.third,
            imgName,
            this.editForm.value.fourth,
            this.editForm.value.id
          );
          this.personaService.updateProy(proy).subscribe((result) => {
            this.ngOnInit();
          });
          this.modalService.dismissAll();
          break;
      }
      if (!this.editForm.invalid) {
        this.message = 'Ingrese todos los valores necesarios';
      }
    }
  }

  openDelete(contentDelete: any, event: MouseEvent, object: any) {
    let target = event.target as HTMLInputElement;
    switch (parseInt(target.getAttribute('data-delete-type') as string)) {
      case 1:
        this.setOptionHandler(1);
        this.setOptionId(object.idEduc);
        break;
      case 2:
        this.setOptionHandler(2);
        this.setOptionId(object.idExp);
        break;
      case 3:
        this.setOptionHandler(3);
        this.setOptionId(object.idProy);
        break;
    }
    this.modalService.open(contentDelete, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
  }

  onDelete() {
    switch (this.option) {
      case 1:
        this.personaService
          .deleteEducacion(this.deleteId as number)
          .subscribe((result) => {
            this.ngOnInit();
          });
        this.modalService.dismissAll();
        break;
      case 2:
        this.personaService
          .deleteExperiencia(this.deleteId as number)
          .subscribe((result) => {
            this.ngOnInit();
          });
        this.modalService.dismissAll();
        break;
      case 3:
        this.personaService
          .deleteProyecto(this.deleteId as number)
          .subscribe((result) => {
            this.ngOnInit();
          });
        this.modalService.dismissAll();
        break;
    }
  }

  uploadImage(event: any) {
    let extencion = this.handleExtencionChange(event.target.files[0].name);
    const name = 'proyecto_' + extencion;
    this.imageService.uploadImage(event, name);
  }

  handleExtencionChange(string: string) {
    let start = string.split('.');
    let some = start[0].replace(' ', '');
    return some + '.' + start[start.length - 1];
  }

  handleExtencionSub(string: string): string {
    let start = string.split('\\');
    let name = start[start.length - 1].trim();
    return name.replace(' ', '');
  }
}
