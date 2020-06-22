import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {HealthResource} from './interfaces/health-resource';
import { HealthResourceTest } from './interfaces/health-resource-test';
import {ConsumableResource} from './interfaces/consumable-resource';
import {ShelterResource} from './interfaces/shelter-resource';
import { environment } from 'src/environments/environment';
import { UserService } from './user-service';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  
  readonly url = environment.dbURL;

  readonly health_ctrl = '/HealthResources';
  readonly health_srvc_ctrl = '/HealthRecourceService';
  readonly consumable_ctrl = '/ConsumableResource';
  readonly shelter_ctrl = '/ShelterResources';


  constructor(
    private http:HttpClient,
    private userService: UserService
    ) { }

  //Updates header based on type of user logged in - either google or basic
  updateHeader() {
    debugger;
    if(this.userService.type=="Basic") {
        
      let authorizationData = 'Basic ' + btoa(this.userService.User.Email + ':' + this.userService.User.password);

      httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': authorizationData
          })
      };
    } else {
        let authorizationData = 'Google ' + this.userService.User;
        httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': authorizationData
          })
        }
    }
  }

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
    return this.http.get<HealthResourceTest[]> (
      this.url+this.health_ctrl+radius_query,httpOptions);
  }

  addHealthResource(res:HealthResource) {
    this.updateHeader();
    console.log(JSON.stringify(res));
    return this.http.post<HealthResource>(this.url+this.health_ctrl,JSON.stringify(res),httpOptions)
            .toPromise();
  }

  addHealthService(res:HealthResource) {
    this.updateHeader();
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
    this.updateHeader();
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
    this.updateHeader();
    return this.http.post<ShelterResource>(this.url+this.shelter_ctrl,JSON.stringify(shelter),httpOptions)
      .toPromise();
  }
}
