import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, AbstractControlOptions } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errMsg: string = '';
 isLoading: boolean = false;
  constructor(private _AuthServiceService: AuthServiceService, private _Router: Router) {}

  registerForm: FormGroup = new FormGroup({
    'firstName': new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    'lastName': new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).+$')
    ]),
    'confirmPassword': new FormControl('', Validators.required),
    'phoneNumber': new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)
    ]),
    'userName': new FormControl(''),
    'displayName': new FormControl(''),
  }, {
    validators: [RegisterComponent.confirmPasswordAndNameValidator]
  } as AbstractControlOptions);

  // Static method for validator to avoid 'this' context issues
  static confirmPasswordAndNameValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    const firstName = group.get('firstName')?.value;
    const lastName = group.get('lastName')?.value;
    const userName = group.get('userName')?.value;
    const displayName = group.get('displayName')?.value;

    if (password === confirmPassword) {
      if (!userName) {
        group.get('userName')?.setValue(`${firstName} ${lastName}`);
      }
      if (!displayName) {
        group.get('displayName')?.setValue(`${firstName} ${lastName}`);
      }
      return null;
    } else {
      return { notMatch: true };
    }
  }

  handleForm(): void {
        const userData = this.registerForm.value;

     this.isLoading = true;
    if (this.registerForm.valid) {


    this._AuthServiceService.register(userData).subscribe({
      next: (res) => {
        if (res) {
          console.log(res);
          this._Router.navigate(['/login']);
          this.isLoading = false;
        }
      },
      error: (err) => {
        this.errMsg = err.error.message;
      }
    });
     }
  }
}
