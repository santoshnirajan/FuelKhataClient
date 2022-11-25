import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Customer{
    FirstName:string="";
    LastName:string="";
    Address:string="";
    PhoneNumber:number=0;

customerFormGroup!:FormGroup
constructor(){
    let formBuilder =  new FormBuilder();
    this.customerFormGroup = formBuilder.group({
        FirstName:['',[Validators.required]],
        LastName:['',[Validators.required]],
        Address:['',[Validators.required]],
        PhoneNumber:['',[Validators.required]]   //validation
    })
}

}