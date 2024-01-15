import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exo1Component } from './exo1/exo1.component';
import { RouterOutlet } from '@angular/router';
import { ExosRoutingModule } from './exos-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    Exo1Component,
   
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ExosRoutingModule,
    FormsModule
  ]
})
export class ExosModule { }
