import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExosComponent } from './exos.component';
import { Exo1Component } from './exo1/exo1.component';

const routes: Routes = [
  {path:'', component: ExosComponent,children: [
    {path: 'exo1', component : Exo1Component}
  ]}
]

@NgModule({   
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ExosRoutingModule { }
