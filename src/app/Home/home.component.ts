import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Shared/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  title = 'FuelKhata';
  public isTrue = false;

  public navigartioDropdown = [
    {
      label: "Home",
      value: "Home"
    },
    {
      label: "Customer",
      value: "Home/Customer"
    },
    {
      label: "Sales",
      value: "Home/Sales"
    },
    {
      label: "Contact Us",
      value: "Home/ContactUs"
    },
    {
      label: "About Us",
      value: "Home/AboutUs"
    },

  ]
  constructor(public commonService: CommonService, private router: Router){}
  ngOnInit() {
  }

  public logout(): void{
    this.commonService.isLoggedIn = false;
    this.router.navigateByUrl('/Login');
  }
    
}
