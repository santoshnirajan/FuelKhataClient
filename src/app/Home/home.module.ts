import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutusComponent } from '../AboutUs/aboutus.component';
import { CustomerComponent } from '../Customer/customer.component';
import { SalesComponent } from '../Sales/sales.component';
import { HomeRoutingModule } from './home-routingmodule';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CustomerComponent,
    AboutusComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
