import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
	  url = environment.apiURL

  constructor(private http:HttpClient) { }

    getAllUsers() {
    	console.log("111111111111111111111111111111")
    return this.http.get(this.url + '/getAllUsers')
  }
  
  deleteUsers(UserId) {
    return this.http.delete(this.url + '/deleteUser/' + UserId)
  }

}
