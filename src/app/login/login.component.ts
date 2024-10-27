import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  login() {
    const user = { username: this.username, password: this.password };
    this.authService.login(user);
  }
}
