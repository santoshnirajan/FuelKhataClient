import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';


const routes: Routes = [
  {
    path:"",redirectTo:"Login",pathMatch:"full"
  },
  {
    path:'Home',
    loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)

  },
  {
    path:"Login", component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
