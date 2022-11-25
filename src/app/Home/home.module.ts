import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutusComponent } from '../AboutUs/aboutus.component';
import { SalesComponent } from '../Sales/sales.component';
import { HomeRoutingModule } from './home-routingmodule';
import { HomeComponent } from './home.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuModule} from 'primeng/menu';
import { CustomerComponent } from '../Customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    SalesComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AccordionModule,
    MenuModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
