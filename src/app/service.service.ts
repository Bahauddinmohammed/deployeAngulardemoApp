import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { EnvironmentServiceService } from './shared/environment.service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url=''
  Studentdata: BehaviorSubject <any> =new BehaviorSubject <any> ('')

  constructor(
    private http:HttpClient,
    private env:EnvironmentServiceService,
  ) {
    this.url=this.env.getApiUrl()
   }

  // `${getBaseUrl()}api/admin/adminUser`,


  getHttpdata(){
    return this.http.get(`${this.env.getApiUrl()}/students`) 
  }
  addhttpData(data:any){
    return this.http.post(`${this.env.getApiUrl()}/students`, data)
  }
  deletehttpdata(data:any){
    return this.http.delete(`${this.env.getApiUrl()}/students/${data.id}`)
  }
  updatehttpData(data:any){
    debugger
    const url=`${this.env.getApiUrl()}/students/${data.id}`
    return this.http.put(url, data);
   
  }
}
