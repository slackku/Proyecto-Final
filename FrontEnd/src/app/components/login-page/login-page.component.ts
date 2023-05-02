import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private router: Router, private loginService: LoginService) {}

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

  formSubmit() {
    const formCont = document.getElementById(
      'form-control-container'
    ) as HTMLElement;
    const userField = formCont.childNodes[0] as HTMLElement;
    const passField = formCont.childNodes[1] as HTMLElement;
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username.trim() == null
    ) {
      if (formCont.childElementCount > 2) {
        formCont.removeChild(formCont.childNodes[2]);
      }
      let p = this.genMessage('Ingrese los campos requeridos');
      formCont.appendChild(p);
      this.changeifInvalid(userField, passField);
    } else {
      this.changeifInvalid(userField, passField);
      this.removeAppend(formCont);
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);

          if (this.loginService.getUserRole() == 'ADMIN') {
            // Si es admin TAL
            console.log('HOLA ADMIN');
            this.router.navigate(['/']);
          } else if (this.loginService.getUserRole() == 'NORMAL') {
            // Si es normal
            console.log('Hola, normalico');
            this.router.navigate(['/']);
          } else {
            this.loginService.logout();
            console.log("HOLA");
            let p = this.genMessage('Datos invalido, vuelva a intentar');
            formCont.appendChild(p);
            this.changeifInvalid(userField, passField);
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changeifInvalid(userField: HTMLElement, passField: HTMLElement) {
    const pfield = passField.childNodes[0] as HTMLElement;
    const ufield = userField.childNodes[0] as HTMLElement;
    if (this.loginData.password.trim() == '') {
      pfield.classList.add('is-invalid');
    } else {
      pfield.classList.remove('is-invalid');
    }
    if (this.loginData.username.trim() == '') {
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
