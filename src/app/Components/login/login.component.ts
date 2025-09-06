import { AuthServiceService } from './../../services/auth-service.service';

import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, AbstractControlOptions } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  coverLogin = false;
  errMsg:string='';
  /**
   *
   */
  constructor(private _AuthServiceService:AuthServiceService,private _Router:Router) {


  }
    loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,

    ])
  });
    handelForm(): void {

    const userData = this.loginForm.value;
    if (this.loginForm.valid) {
      this._AuthServiceService.Login(userData).subscribe({
        next: (response) => {
          console.log(response);

           localStorage.setItem('userToken',response.token);
           this._AuthServiceService.decodeToken();

            this._Router.navigate(['/blank/home']);


        },
        error: (err) => {
          this.errMsg = err.errors;
          console.log(err);

        }
      });
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }

}
