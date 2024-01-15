import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExosComponent } from './exos.component';
import { Exo1Component } from './exo1/exo1.component';
import { FormulaireEnregistrementComponent } from './FormulaireEnregistrement/formulaire-enregistrement/formulaire-enregistrement.component';

const routes: Routes = [
  {path:'', component: ExosComponent,children: [
    {path: 'exo1', component : Exo1Component},

    //fais le lien entre une route et un composent path : nom de la route qui peux etre changer 
    {path: 'formulaire', component : FormulaireEnregistrementComponent}
  ]}
]

@NgModule({   
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ExosRoutingModule { }
