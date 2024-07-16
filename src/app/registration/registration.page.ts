import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  providers: [MessageService],
})
export class RegistrationPage implements OnInit {


  
  archivoCapturado: String="";
  
  previzualizacion: Object="";

  loginForm=new FormGroup({
    nombre: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required),
    operation: new FormControl('crear')  
  })

  constructor(private api: ApiService,private messageService: MessageService,private sanitizer: DomSanitizer,private router: Router) {}

  public archivos :any=[];

 
  ngOnInit(): void {
  }

  onlogin(form:any){

const datos= new FormData();



console.log("registro");
console.log(this.previzualizacion)


  this.api.registrar(form).subscribe(data=>{
  console.log(data);


    if(data.result=="success")
    {
      this.messageService.add({ severity: 'Registro', summary: 'Registro', detail: 'Registro realizado exitosamente' });
    }
    else{
      
      this.messageService.add({ severity: 'Error', summary: 'Error', detail: 'Error al registrarte' });
    }
   

  } )

  
  }

 

}
