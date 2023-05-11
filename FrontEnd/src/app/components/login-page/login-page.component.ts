import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { PersonaService } from 'src/app/services/auth/persona.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private router: Router, private personaService: PersonaService) {}

  homePage() {
    this.router.navigate(['/']);
  }
  loginData = {
    username: '',
    password: '',
  };

  ngOnInit() {
    const cursor = document.querySelector('#cursor') as HTMLElement;
    const btns = document.getElementsByClassName('btn');
    this.eloHtmlColection(btns, cursor);
  }

  send() {
    const formCont = document.getElementById(
      'form-control-container'
    ) as HTMLElement;
    const userField = formCont.childNodes[0] as HTMLElement;
    const passField = formCont.childNodes[1] as HTMLElement;
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.password.trim() == ''
    ) {
      if (formCont.childElementCount > 2) {
        formCont.removeChild(formCont.childNodes[2]);
      }
      let p = this.genMessage('Ingrese los campos requeridos');
      formCont.appendChild(p);
      this.changeifInvalid(userField, passField);
    } else {
      this.personaService.login(this.loginData).subscribe((data) => {
        if (data.id != null) {
          localStorage.setItem('isSessionOn', '1');
          this.router.navigate(['']);
        } else {
          localStorage.setItem('isSessionOn', '0');
        }
      });
      this.changeifInvalid(userField, passField);
      this.removeAppend(formCont);
    }
  }
  changeifInvalid(userField: HTMLElement, passField: HTMLElement) {
    const pfield = passField.childNodes[0] as HTMLElement;
    const ufield = userField.childNodes[0] as HTMLElement;
    let loginObject = this.loginData;
    if (loginObject.password?.trim() == '' || loginObject.password == null) {
      pfield.classList.add('is-invalid');
    } else {
      pfield.classList.remove('is-invalid');
    }
    if (loginObject.username?.trim() == '' || loginObject.password == null) {
      ufield.classList.add('is-invalid');
    } else {
      ufield.classList.remove('is-invalid');
    }
  }

  removeAppend(formCont: HTMLElement) {
    if (formCont.childElementCount > 2) {
      formCont.removeChild(formCont.childNodes[2]);
    }
  }

  genMessage(msg: string): HTMLElement {
    const p = document.createElement('p');
    const message = document.createTextNode(msg);
    p.appendChild(message);
    return p;
  }

  eloHtmlColection(htmlC: HTMLCollection, cursor: HTMLElement) {
    //Event Listener on a HTMLCollection
    for (var i = 0; i < htmlC.length; i++) {
      htmlC[i].addEventListener('mouseenter', () => {
        cursor.classList.toggle('normal');
        cursor.classList.add('ontext');
      });
      htmlC[i].addEventListener('mouseleave', () => {
        cursor.classList.toggle('ontext');
        cursor.classList.add('normal');
      });
    }
  }
}
