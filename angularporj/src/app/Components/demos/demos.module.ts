import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { DemosComponent } from './demos.component';
import { RouterOutlet } from '@angular/router';
import { DemosRoutingModule } from './demos-routing.module';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from '../demos/pipes/pipes.component';
import { TempConvertPipe } from './pipes/temp-convert.pipe';


@NgModule({
  declarations: [
    BindingsComponent,
    DemosComponent,
    PipesComponent,
    TempConvertPipe
    
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    DemosRoutingModule,
    FormsModule
  ]
})
export class DemosModule { }
