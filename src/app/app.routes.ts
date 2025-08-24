import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { AboutComponent } from './Components/about/about.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';

import { RegisterComponent } from './Components/register/register.component';

export const routes: Routes = [
  {path:'blank',component:BlankLayoutComponent, children:[
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: { title: 'Home' } },
    {path: 'products', loadComponent: () => import('./Components/products/products.component').then(m => m.ProductsComponent), data: { title: 'Products' } },
   {path:'about',component:AboutComponent, data: { title: 'About' } },

  ]},
  {path:'',component:AuthLayoutComponent, children:[
   { path:'', redirectTo: 'register', pathMatch: 'full' },
   {path:'login',loadComponent: () => import('./Components/login/login.component').then(m => m.LoginComponent), data: { title: 'Login' } },
 {path:'register',loadComponent: () => import('./Components/register/register.component').then(m => m.RegisterComponent), data: { title: 'Register' } },
  ]}

];
