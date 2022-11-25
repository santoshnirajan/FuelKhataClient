import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Sales } from '../Model/_Sales';
import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  title = 'FuelKhata';
  sales:Sales= new Sales()
  customerList: any;
  fuelTypeList: any;
  send_date=new Date();
  formattedDate : any;
  totalRate: any;
  total!: number;
  Value: any;
  saleList:any;
ngOnInit(){
  this.getSaleList();
  this.listCustomers();
  this.listFuelType();
}
  constructor(private service:ApiService){
    this.send_date.setMonth(this.send_date.getMonth());
     this.formattedDate=this.send_date.toISOString().slice(0,10);
     this.calculate
 console.log(this.formattedDate); 
  }

  calculate() : any {

    const rate = this.sales.salesFormGroup.controls['Rate'].value;
    const qty = this.sales.salesFormGroup.controls['Quantity'].value;
    const total = Number(rate) * Number(qty);
    console.log(total);
    this.sales.salesFormGroup.controls['TotalRate'].setValue(total);
}

  listFuelType(){
    this.service.getFuelType().subscribe(
      res=>{
        this.fuelTypeList=res;
        console.log(this.fuelTypeList);
      },
      err=>{
        console.log(err);
      }
    );
  }
  listCustomers(){
    this.service.getCustomer().subscribe(
      res=>{
        this.customerList=res;
      },
      err=>{

      }
    );
  }
  addSales(){
    //let salesDetail=this.sales.salesFormGroup.value;
    let salesObj = {
      CustomerId:  this.sales.CustomerId,
      Date: this.formattedDate,
      Quantity: +this.sales.salesFormGroup.controls["Quantity"].value,
      TotalRate: this.sales.salesFormGroup.controls["TotalRate"].value,
      Remarks: this.sales.salesFormGroup.controls["Remarks"].value,
      FuelId: this.sales.FuelId
    }
    this.service.postSales(salesObj).subscribe(
      res=>{
        this.getSaleList();
        this.sales.salesFormGroup.reset();
        this.sales= new Sales();
        alert("Sales Added succesfully");
      },
      err=>{
        console.log(err);
      }
    );
  }

  OnItemNameChange($event: any){
    if($event){
      const fuelId = +$event.target.value;
      const fuelType = this.fuelTypeList.find((a:any) => a.id === fuelId);
      this.sales.FuelId = fuelType.id;
      this.sales.salesFormGroup.controls["Rate"].setValue(fuelType.rate);
    }
  }

    OnCustomerChange($event: any){
    if($event){
      const customerId = +$event.target.value;
      this.sales.CustomerId = customerId;
    }
  }

  getSaleList(){
    this.service.getSaleList().subscribe(res =>{
      console.log(res);
      this.saleList = res;
    }, err =>{
      console.log(err);
    })
  }

}