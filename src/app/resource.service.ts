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
  private health_ctrl = 'HealthResources';
  private consumable_ctrl = 'ConsumableResources';
  private shelter_ctrl = 'ShelterResources';


  constructor(private http:HttpClient) { }

  getHealthResources() {
    return this.http.get<HealthResource[]> (
      this.url+this.health_ctrl,httpOptions);
  }

  addHealthResource(res:HealthResource) {
    console.log(JSON.stringify(res));
    return this.http.post<HealthResource>(this.url+this.health_ctrl,JSON.stringify(res),httpOptions)
            .toPromise();
  }

  getConsumableResources() {
    return this.http.get<ConsumableResource[]> (
      this.url+this.consumable_ctrl,httpOptions);
  }

  getShelterResources() {
    return this.http.get<ShelterResource[]> (
      this.url+this.shelter_ctrl,httpOptions);
  }
}
