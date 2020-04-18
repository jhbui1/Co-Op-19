import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import {HealthResource} from './interfaces/health-resource';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  
  private url = 'https://localhost:44382/HealthRecourceService'

  constructor(private http:HttpClient) { }

  getHealthResources() {
    return this.http.get<HealthResource[]> (
      this.url,httpOptions);
  }
}
