import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProducts():Observable<any>
{
       return this._HttpClient.get(`http://localhost:5010/api/Product`);
}
}
