import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  email = 'admin@example.com';
  password = 'password123';
  errorMessage = '';
  isLoggedIn = !!localStorage.getItem('travlr-token');

  constructor(private http: HttpClient) {}

  login(): void {
    this.errorMessage = '';

    this.http.post<{ token: string }>('http://localhost:3000/api/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        localStorage.setItem('travlr-token', response.token);
        this.isLoggedIn = true;
      },
      error: () => {
        this.errorMessage = 'Login failed. Check email and password.';
      }
    });
  }

  logout(): void {
    localStorage.removeItem('travlr-token');
    this.isLoggedIn = false;
  }
}