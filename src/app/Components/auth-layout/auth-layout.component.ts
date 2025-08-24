import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet,NavAuthComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
