import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Model/_Customer';

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

}
