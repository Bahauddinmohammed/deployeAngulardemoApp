import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentServiceService {

  constructor() { }

  getApiUrl(){
    return environment.apiUrl;
  }
}
