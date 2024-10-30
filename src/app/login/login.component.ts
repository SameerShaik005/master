import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myLogInForm: FormGroup;
  validUserName = 'Neha123';
  validPassword = 'Neha123';

  constructor(private authService: AuthService, private router: Router) {
    this.myLogInForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')  
    });
  }

  login() {
    if(this.myLogInForm.get('username')?.value == this.validUserName &&  
    this.myLogInForm.get('password')?.value == this.validPassword) {
      this.router.navigateByUrl('/home')
    }
    //this.authService.login(user);
  }
}
