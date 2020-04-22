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

  
  private url = 'https://db-19.azurewebsites.net/'
  // private url = 'http://localhost:44382/'

  private health_ctrl = 'HealthResources';
  private health_srvc_ctrl = 'HealthRecourceService';
  private consumable_ctrl = 'ConsumableResources';
  private shelter_ctrl = 'ShelterResources';


  constructor(private http:HttpClient) { }

 

  buildRadiusQuery(gpsn:number,gpsw:number,radius?:number): string {
    let res: string = `/${gpsn}/${gpsw}/`;
    if(radius) {
      res+= radius;
    } else {
      res+="0.5";
    }
    return res;
  }

  getHealthResource(id:number|null) {
    return this.http.get<HealthResource> (
      this.url+this.health_ctrl+`/${id}`,httpOptions);
  }


  getHealthResources(gpsn:number,gpsw:number,radius?:number) {
    let radius_query = this.buildRadiusQuery(gpsn,gpsw,radius);
    return this.http.get<HealthResource[]> (
      this.url+this.health_ctrl+radius_query,httpOptions);
  }

  addHealthResource(res:HealthResource) {
    console.log(JSON.stringify(res));
    return this.http.post<HealthResource>(this.url+this.health_ctrl,JSON.stringify(res),httpOptions)
            .toPromise();
  }

  addHealthService(res:HealthResource) {
    console.log(JSON.stringify(res));
    return this.http.post<HealthResource>(this.url+this.health_srvc_ctrl,JSON.stringify(res),httpOptions)
      .toPromise();
  }


  getConsumableResources(gpsn:number,gpsw:number,radius?:number) {
    let radius_query = this.buildRadiusQuery(gpsn,gpsw,radius);
    return this.http.get<ConsumableResource[]> (
      this.url+this.consumable_ctrl+radius_query,httpOptions);
  }

  addConsumableResource(consumable: ConsumableResource) {
    console.log(JSON.stringify(consumable));
    return this.http.post<ConsumableResource>(this.url+this.consumable_ctrl,JSON.stringify(consumable),httpOptions)
      .toPromise();
  }

  getShelterResources(gpsn:number,gpsw:number,radius?:number) {
    let radius_query = this.buildRadiusQuery(gpsn,gpsw,radius);
    return this.http.get<ShelterResource[]> (
      this.url+this.shelter_ctrl+radius_query,httpOptions);
  }

  addShelterResource(shelter: ShelterResource) {
    return this.http.post<ShelterResource>(this.url+this.shelter_ctrl,JSON.stringify(shelter),httpOptions)
      .toPromise();
  }
}
