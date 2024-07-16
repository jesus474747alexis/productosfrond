import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonItem, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrincipalComponent } from './principal/principal.component';

import { HomePage } from './home/home.page';

import { CommonModule } from '@angular/common';

import { PerfillikeComponent } from './perfillike/perfillike.component';


@NgModule({
  declarations: [AppComponent,,HomePage,PerfillikeComponent,PrincipalComponent],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule ,IonicModule.forRoot(), AppRoutingModule,HttpClientModule,RouterModule,HttpClientModule,ToastModule,BrowserAnimationsModule,IonicModule,CommonModule ],
  providers: [MessageService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
