import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'https://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
