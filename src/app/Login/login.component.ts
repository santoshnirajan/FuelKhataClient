import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Shared/common.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'FuelKhata';
  loginRequest:User=new User();
  userCredentials = {
    username: "santosh@gmail.com",
    password: "hello123"
  };
  constructor(private router:Router, private commonService: CommonService){}

  login(){
    if(this.loginRequest.email === this.userCredentials.username && this.loginRequest.password === this.userCredentials.password){
      this.commonService.isLoggedIn = true;
      this.router.navigateByUrl("/Home/Customer");
      }
      else{
        alert("Please enter correct credentials.")
      }  
  }
}
