import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ExosComponent } from './Components/exos/exos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'demos', loadChildren: ()=> 
    import('./Components/demos/demos.module').then(m => m.DemosModule)},

    
  {path: 'exos',loadChildren: ()=> 
    import('./Components/exos/exos.module').then(m => m.ExosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
