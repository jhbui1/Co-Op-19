import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

import { ConsumableResource } from '../interfaces/consumable-resource';
import { HealthResource } from '../interfaces/health-resource';
import { ShelterResource } from '../interfaces/shelter-resource';
import { ResourceFormService } from '../resource-form.service';
import { ResourceService } from '../resource.service';
import { UserService } from '../user-service';


interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
  styleUrls: ['./add-resource-form.component.scss']
})
export class AddResourceFormComponent implements OnInit {

  constructor(
    public resourceForm: ResourceFormService,
    public userServ: UserService,
    public resourceServ: ResourceService
  ) {}
  added:boolean = false;
  gpsn: number = -1000;
  gpsw: number = -1000;
  zoom: number = 8;
  dbUpdateError : boolean = false;
  addCoords : boolean = false;
  addService : boolean = false;
  healthID : number = -1;

  health : HealthResource  =  new HealthResource(0,0,"","",false,0,0,0,"","","","","",[],0);
  healthService : HealthResource = new HealthResource(0,0,"","",false,0,0,0,"","","","","",[],0);
  shelter : ShelterResource = new ShelterResource(0,0,0,false,0,0,"","","","",""); 
  consumable : ConsumableResource = new ConsumableResource(0,1,0,0,0,"","","","","",0);
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  updateObjLocs() {
    this.health.gpsn=this.gpsn;this.health.gpsw=this.gpsw;
    this.shelter.gpsn=this.gpsn;this.shelter.gpsw=this.gpsw;
    this.consumable.gpsn=this.gpsn;this.consumable.gpsw=this.gpsw;
  }

  setUserPos(pos:Position) {
    this.gpsw = pos.coords.longitude;
    this.gpsn = pos.coords.latitude;
    this.updateObjLocs();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos=>this.setUserPos(pos));
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  mapClicked($event: any) {
    this.gpsw = $event.coords.lng;
    this.gpsn = $event.coords.lat;
    this.updateObjLocs();
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = []

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
    if(this.userServ.logInStatus){
      if(this.resourceForm.addConsumable) {
        this.added=true;
        this.resourceServ.addConsumableResource(this.consumable)
          .then(()=>console.log("res added"))
          .catch(()=>this.dbUpdateError=true);
      } else if(this.resourceForm.addShelter) {
        this.added=true;
        this.resourceServ.addShelterResource(this.shelter)
          .then()
          .catch(()=>this.dbUpdateError=true);
      } else if(this.resourceForm.addHealth) {
        this.added=true;
        this.resourceServ.addHealthResource(this.health)
          .then()
          .catch(()=>this.dbUpdateError=true);
      } 
    }else {

    }
  }

  

}
