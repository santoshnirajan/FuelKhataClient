import {Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  selectedCustomer: any;
  customerId: any;
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
  listCustomerById(customerId:any){
    this.getCustomerId(customerId);
    this.service.getCustomerById(customerId).subscribe(
      res=>{
        this.customer.customerFormGroup=new FormGroup({
          FirstName: new FormControl(res['firstName']),
          LastName: new FormControl(res['lastName']),
          Address: new FormControl(res['address']),
          PhoneNumber: new FormControl(res['phoneNumber'])
        })
      },
      err=>{
        console.log(err);
      }
    );
  }
  addCustomer(){
    let customerData=this.customer.customerFormGroup.value;
    this.service.postCustomer(customerData).subscribe(
      res =>{
        console.log(res);
        this.customer.customerFormGroup.reset();
        this.customer=new Customer();
        this.listCustomer();
        alert("Record Added Successfully");
      },
      err=>{
        console.log(err);
      }
    )
  }
  getCustomerId(id:any){
    this.customerId=id;
  }
  editCustomer(){
    let customerData=this.customer.customerFormGroup.value;
    this.service.UpdateCustomer(customerData, this.customerId).subscribe(
      res =>{
        this.listCustomer();
        alert("Record Updated Successfully");
      },
      err =>{
      console.log(err);
      }
    )
  }
  removeCustomer(customerId:any){
    this.service.deleteCustomer(customerId).subscribe(
      res=>{
        this.listCustomer();
      },
      err=>{
        
      }
    );
  }

}

