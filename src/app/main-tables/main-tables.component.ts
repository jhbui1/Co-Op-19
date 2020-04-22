import { Component, OnInit } from '@angular/core';

import { ResourceService } from '../resource.service';
import { HealthResource } from '../interfaces/health-resource';
import { ShelterResource } from '../interfaces/shelter-resource';
import { ConsumableResource } from '../interfaces/consumable-resource';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-main-tables',
  templateUrl: './main-tables.component.html',
  styleUrls: ['./main-tables.component.scss']
})
export class MainTablesComponent implements OnInit {

  
  searchRadius : number | undefined;
  gpsn: number = 0;
  gpsw: number = 0;
  zoom: number = 8;
  healthResources : HealthResource[] = [];
  shelterResources : ShelterResource[] = [];
  consumableResources : ConsumableResource[] = [];
  headElements = ['ID','Name', 'GPSN', 'GPSW', 'Estimated Cost'];
  consumableHeadElements = ['ID','Name','Price','Quantity', 'GPSN', 'GPSW',];
  shelterHeadElements = ['ID','Name','Vacancy','Rating', 'GPSN', 'GPSW',];

  constructor(private ResourceService:ResourceService) { }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: any) {
    this.gpsw=$event.coords.lng;
    this.gpsn=$event.coords.lat;
    this.resetTables();
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = []
	  

  resetTables() {
    this.getHealthResources();
    this.getHealthResources();
    this.getShelterResources();
    this.getConsumableResources();
  }

  getHealthResources() {
    this.ResourceService.getHealthResources(this.gpsn,this.gpsw,this.searchRadius).subscribe(
        resp=>{this.healthResources=resp;console.log(this.healthResources)}
      );
  }

  getConsumableResources() {
    this.ResourceService.getConsumableResources(this.gpsn,this.gpsw,this.searchRadius).subscribe(
      resp=>{this.consumableResources=resp;}
    );
  }
  
  getShelterResources() {
    this.ResourceService.getShelterResources(this.gpsn,this.gpsw,this.searchRadius).subscribe(
      resp=>{this.shelterResources=resp;}
    );
  }

  setUserPos(pos:Position) {
    this.gpsn = pos.coords.latitude;
    this.gpsw = pos.coords.longitude;
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos=>{
        this.setUserPos(pos);
        this.resetTables();
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  ngOnInit(): void {
    this.getLocation();
   
  }



}
