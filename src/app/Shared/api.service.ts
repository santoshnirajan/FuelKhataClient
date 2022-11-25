import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Model/_Customer';
import { Sales } from '../Model/_Sales';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
getCustomer():Observable<any>{
  return this.http.get("https://localhost:7013/api/Customer",{responseType:'json'});
}
postCustomer(customer:Customer):Observable<any>{
return this.http.post("https://localhost:7013/api/Customer",customer,{responseType:'json'});
}
UpdateCustomer(customer:Customer,customerId:any):Observable<any>{
  return this.http.put("https://localhost:7013/api/Customer/"+customerId,customer,{responseType: 'json'});
}
getCustomerById(customerId:any):Observable<any>{
  return this.http.get("https://localhost:7013/api/Customer/"+customerId,{responseType:'json'})
}
deleteCustomer(customerId:any):Observable<any>{
  return this.http.delete("https://localhost:7013/api/Customer/"+customerId,{responseType: 'json'});
}
getFuelType():Observable<any>{
  return this.http.get("https://localhost:7013/api/FuelTypes",{responseType:'json'});
}
postSales(sales:any):Observable<any>{
  return this.http.post("https://localhost:7013/api/Sales/",sales,{responseType:'json'});
}
getSaleList():Observable<any>{
  return this.http.get("https://localhost:7013/api/Sales",{responseType:'json'});
}

}
