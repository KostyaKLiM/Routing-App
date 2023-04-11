import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    InputComponent,
    FooterComponent,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
