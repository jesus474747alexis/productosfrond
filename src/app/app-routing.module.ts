import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

import { HomePage } from './home/home.page';

import { PerfillikeComponent } from './perfillike/perfillike.component';
import { RegistrationPage } from './registration/registration.page';

const routes: Routes = [
 

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  


 { path: 'home', component: HomePage, children: [
    {
      path: 'principal',
      component: PrincipalComponent
    },
    
    {
      path: 'formulario',
      component: RegistrationPage
    },
  
    {
      path:"perfillike",component:PerfillikeComponent
    },
    
    
  ] },


 

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }