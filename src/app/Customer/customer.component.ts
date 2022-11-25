import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/_Customer';
import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title = 'FuelKhata';
  customer: Customer = new Customer();
  customerList: any;
  constructor(private service: ApiService) { }
  ngOnInit(): void {
    this.listCustomer();
  }
  listCustomer() {
    this.service.getCustomer().subscribe(
      res => {
        this.customerList = res;
        console.log(this.customerList);
      },
      err => {
        console.log(err);
      }
    )
  }
  addCustomer(){
    this.service.postCustomer(this.customer).subscribe(
      res =>{
      
        console.log(res);
      },
      err=>{
        console.log(err);

      }
    )
  }

}

