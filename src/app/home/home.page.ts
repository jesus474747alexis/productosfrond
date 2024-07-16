import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private api :ApiService) {}
  file:File;
  uploadedImage:File;
 
datos={
  "operation":"fotografia"
}

  formData=new FormData();
;



  onFileSelect(event:any){
   
   this.file=event.target.files[0];
console.log(this.file);

  }



  ngOnInit(){
 
    

   
 console.log(sessionStorage["home"]);

  }

 

}
