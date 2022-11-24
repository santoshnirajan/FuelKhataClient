import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../AboutUs/aboutus.component';
import { CustomerComponent } from '../Customer/customer.component';
import { SalesComponent } from '../Sales/sales.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      {
        path:"",redirectTo:"AboutUs", pathMatch:"full"
      },
      {
        path: "Customer", component: CustomerComponent
      },
      {
        path: "Sales", component: SalesComponent
      },
      {
        path: "AboutUs", component: AboutusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
