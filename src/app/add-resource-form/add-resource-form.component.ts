import { Component, OnInit } from '@angular/core';

import { ConsumableResource } from '../interfaces/consumable-resource';
import { HealthResource } from '../interfaces/health-resource';
import { ShelterResource } from '../interfaces/shelter-resource';
import { ResourceFormService } from '../resource-form.service';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss']
})
export class AddResourceFormComponent implements OnInit {

  constructor(
    public resourceForm:ResourceFormService,
    private resourceServ: ResourceService
    ) {}

  dbUpdateError : boolean = false;
  addCoords : boolean = false;
  addService : boolean = false;
  healthID : number = -1;

  health : HealthResource  =  new HealthResource(0,0,"","",false,0,0,0,"","","","","",0,0);
  healthService : HealthResource = new HealthResource(0,0,"","",false,0,0,0,"","","","","",0,0);
  shelter : ShelterResource = new ShelterResource(0,0,0,false,0,0,"","","","",""); 
  consumable : ConsumableResource = new ConsumableResource(0,1,0,0,0,"","","","","",0);

  setUserPos(pos:Position) {
    let long = pos.coords.longitude;
    let lat = pos.coords.latitude
    this.health.gpsn=lat;this.health.gpsw=long;
    this.shelter.gpsn=lat;this.health.gpsw=long;
    this.consumable.gpsn=lat;this.consumable.gpsw=long;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos=>this.setUserPos(pos));
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  ngOnInit(): void {
    this.getLocation();
  }

  addHealthService() {
    if(this.addService) { //user has previously clicked add service, should now attempt to submit service
      debugger;
      this.healthService.resourceId = this.healthID;
      this.resourceServ.addHealthService(this.healthService)
        .then()
        .catch(()=>this.dbUpdateError=true);
    } else { //user has just filled out health resource
      this.resourceServ.addHealthResource(this.health)
        .then(resp=>{
            console.log(resp);
            this.healthID=resp.id
          })
        .catch((err)=>{console.log(err);this.dbUpdateError=true});
      //get id of added resource
    }
    this.addService = true;
  }

  onSubmit() {
    this.dbUpdateError=false;
    //check which form is active and post corresponding property
    if(this.resourceForm.addConsumable) {
      debugger;
      this.resourceServ.addConsumableResource(this.consumable)
        .then(()=>console.log("res added"))
        .catch(()=>this.dbUpdateError=true);
    } else if(this.resourceForm.addShelter) {
      this.resourceServ.addShelterResource(this.shelter)
        .then()
        .catch(()=>this.dbUpdateError=true);
    } else if(this.resourceForm.addHealth) {
      this.resourceServ.addHealthResource(this.health)
        .then()
        .catch(()=>this.dbUpdateError=true);
    }
  }

  

}
