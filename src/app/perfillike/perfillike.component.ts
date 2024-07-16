import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfillike',
  templateUrl: './perfillike.component.html',
  styleUrls: ['./perfillike.component.scss'],
})
export class PerfillikeComponent  implements OnInit {

  constructor(private api: ApiService,private router: Router, http: HttpClient) {}


  formData=new FormData();

 data:any;



  urlTree = this.router.parseUrl(this.router.url);


   id = this.urlTree.queryParams['id'];

datos = {
    id: this.id,
    operation: "registros"
     };

  ngOnInit(): void {
      this.api.productos(this.datos).subscribe(data=>{
      this.data=data; 
     console.log(this.id); 
    } )
  }

  


}
