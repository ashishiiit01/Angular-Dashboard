import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { LoginService } from '../../services/loginService/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public email = <any>'';
	public password = <any>'';
	userId: string;
 
	
  constructor(private loginService: LoginService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  	this.getUserLoginStatus()
  }


   checkCredentials() {
    if(this.email=='' || this.password=='')
      return
    else {
      if(this.email=='admin' && this.password=='admin') {
        window.localStorage.setItem("userId",this.userId);
        this._router.navigate(['redirectToDashboard']);
      } else {
        
      }
    }
  }


  getUserLoginStatus() {
    console.log('getUserLoginStatus')
    if(window.localStorage.getItem('userId'))
    {
      this.userId = localStorage.getItem('userId')
      console.log(this.userId)
      this._router.navigate(['redirectToDashboard']);
    }
  }

}
