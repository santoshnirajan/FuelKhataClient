import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../AboutUs/aboutus.component';
import { CustomerComponent } from '../Customer/customer.component';
import { LoginComponent } from '../Login/login.component';
import { SalesComponent } from '../Sales/sales.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      {
        path:"",redirectTo:"Home", pathMatch:"full"
      },
      {
        path: "Customer", component: CustomerComponent
      },
      {
        path: "Sales", component: SalesComponent
      },
      {
        path: "AboutUs", component: AboutusComponent
      },

      {
        path: "logout", component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
