import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any= '';
  password: any = '';

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router) {
  }

  onSubmit() {
    this.username = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    
    if (this.username === 'jerry@gmail.com' && this.password === 'jerry') {
      console.log("Succesfully logged in!");
      localStorage.setItem('access', "ok");
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }


  
}
