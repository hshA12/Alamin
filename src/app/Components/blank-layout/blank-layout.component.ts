import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { NavBlankComponent } from '../nav-blank/nav-blank.component';
import { AboutComponent } from '../about/about.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NavBlankComponent,AboutComponent,ProductsComponent,],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.css'
})
export class BlankLayoutComponent {

}
