import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import {HealthResource} from './interfaces/health-resource';
import {ConsumableResource} from './interfaces/consumable-resource';
import {ShelterResource} from './interfaces/shelter-resource';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  
  private url = 'https://localhost:44382/'

  constructor(private http:HttpClient) { }

  getHealthResources() {
    return this.http.get<HealthResource[]> (
      this.url+"HealthRecourceService",httpOptions);
  }

  getConsumableResources() {
    return this.http.get<ConsumableResource[]> (
      this.url+"ConsumableResources",httpOptions);
  }

  getShelterResources() {
    return this.http.get<ShelterResource[]> (
      this.url+"ShelterResources",httpOptions);
  }
}
