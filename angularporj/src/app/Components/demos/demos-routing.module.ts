import { Component, NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DemosComponent } from './demos.component';
import { BindingsComponent } from './bindings/bindings.component';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
    {path: '',component: DemosComponent, children: [
        {path:'bindings', component: BindingsComponent},
        {path:'pipes', component: PipesComponent}
    ]}
    
]



@NgModule({
  
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class DemosRoutingModule { }
