import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from './Components/nav-blank/nav-blank.component';
import { NavAuthComponent } from "./Components/user/nav-auth/nav-auth.component";
import { HomeComponent } from './Components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBlankComponent, NavAuthComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alamin';
}
