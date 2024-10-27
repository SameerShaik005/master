import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:5000';

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: { username: string, password: string }) {
    return this.http.post(`${this.authUrl}/signup`, user);
  }

  login(user: { username: string, password: string }) {
    return this.http.post<{ token: string }>(`${this.authUrl}/login`, user).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/gallery']);
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
