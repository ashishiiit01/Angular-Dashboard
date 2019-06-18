import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


import { Chart } from 'chart.js';
import { DashboardService } from '../../services/dashboard/dashboard.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   searchString = "";
  p: number = 1;
  t: number = 10;
    users = <any>[];


  constructor(private dashboardService: DashboardService, private _router: Router) { }

  ngOnInit() {
     if (!window.localStorage.getItem('userId'))
      this._router.navigate(['/login']);
    else
      this.initIoConnection()
  }

  private initIoConnection(): void {
    this.dashboardService.getAllUsers().subscribe(res => {
      this.users = res
      console.log('This.Users', this.users)
    })
  }

}
