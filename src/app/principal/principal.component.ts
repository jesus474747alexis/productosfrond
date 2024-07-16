import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent  implements OnInit {


  constructor(private api: ApiService,private router: Router) {}

  productos=[];
  data :any;  
  id:string=sessionStorage["home"];
  interval:any;

datos = {
    id: this.id,
    operation: "principal"
     };

  

  ngOnInit(): void {
     
    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 5000);
  
    
  }


  refreshData(){
    this.api.producto(this.datos).subscribe(data=>{
     
      this.data=data;
      const array=data;
      console.log(data);
      this.productos=this.data.user.map( (resultado)=> resultado );


  } )

  }



}
