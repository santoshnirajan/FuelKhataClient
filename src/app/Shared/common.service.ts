import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class CommonService {
    constructor() { }

    public isLoggedIn: boolean = false;

  }  