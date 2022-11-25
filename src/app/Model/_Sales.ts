import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Sales{
    public Date:Date=new Date();
    public Quantity:number=0;
    public Rate:number=0;
    public TotalRate:number=0;
    public Remarks: string="";
    public CustomerId: number = 0;
    public FuelId: number = 0;
    public salesFormGroup!:FormGroup;
    constructor(){
        let formBuilder=new FormBuilder()
        this.salesFormGroup= formBuilder.group({
            Quantity:['',[Validators.required]],
            Rate:['',[Validators.required]],
            CustomerName:['',[Validators.required]],
            ItemName:['',[Validators.required]],
            Remark:['',[Validators.required]],
            TotalRate:['',[Validators.required]],
            Remarks:['',[Validators.required]]
        })
    }
}