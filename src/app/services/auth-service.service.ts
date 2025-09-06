import { User } from './../interfaces/user';
import { jwtDecode } from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  userData:User={}as User;;
  decodeToken(){
    let encodeToken=localStorage.getItem('userToken');
    let decodeToken:any=jwtDecode(encodeToken+'');
    this.userData=decodeToken;
  }
  register(userData:Object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:5010/api/Authentication/Register',userData);
  }
  Login(UserData:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:5010/api/Authentication/Login',UserData);
  }

}
