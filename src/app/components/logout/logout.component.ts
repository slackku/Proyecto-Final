import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  isSessionOn = parseInt(
    localStorage.getItem('isSessionOn')?.toString() as string
  );
  constructor(private router: Router) {}

  logOut() {
    localStorage.setItem('isSessionOn', '0');
    location.reload();
  }
}
