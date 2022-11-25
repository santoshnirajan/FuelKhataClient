import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_userCredintials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'FuelKhata';
  loginRequest:User=new User();
  constructor(private router:Router){}

  login(){
    this.router.navigateByUrl('/Home');
  }

  user:User=new User();
  email:any;
  password:any;
  

  doLogin(){
  if(this.email==this.user.email&&this.password==this.user.password){
  this.router.navigateByUrl("/Customer");
  }
  else{
    alert("Please enter correct credentials.")
  }
  }
}
