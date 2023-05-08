import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isSessionOn = parseInt(
    localStorage.getItem('isSessionOn')?.toString() as string
  )
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/login']);
  }
}
