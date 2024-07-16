import { Injectable } from '@angular/core';
import { loginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url="http://localhost/productos/";

  constructor(private htpp:HttpClient) { }
 
  private _refresh$= new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }

  registrar(form:any):Observable<any>{
   let direccion=this.url; 
    return this.htpp.post<any>(direccion,form);
  }
  
  productos(datos: object):Observable<any>{
    let direccion=this.url; 
     return this.htpp.post<any>(direccion,datos);
   }
   
  producto(datos: object):Observable<any>{
    let direccion=this.url; 
     return this.htpp.post<any>(direccion,datos).pipe( tap(()=>{
      this._refresh$.next();  
      })
     )

   }

   
}
