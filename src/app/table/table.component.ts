import { Component, OnInit, Input } from '@angular/core';
import { HealthResourceTest } from '../interfaces/health-resource-test';
import { ShelterResource } from '../interfaces/shelter-resource';
import { ConsumableResource } from '../interfaces/consumable-resource';
import { Subscription } from 'rxjs';
import { ResourceService } from '../resource.service';
import { NgwWowService } from 'ngx-wow';
import { HealthResource } from '../interfaces/health-resource';
import { ActivatedRoute } from '@angular/router';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  searchRadius : number | undefined;
  gpsn: number = 0;
  gpsw: number = 0;
  zoom: number = 8;
  healthResources : HealthResourceTest[] = [];
  shelterResources : ShelterResource[] = [];
  consumableResources : ConsumableResource[] = [];
  headElements = ['ID','Name', 'GPSN', 'GPSW', 'Estimated Cost'];
  consumableHeadElements = ['ID','Name','Price','Quantity', 'GPSN', 'GPSW',];
  shelterHeadElements = ['ID','Name','Vacancy','Rating', 'GPSN', 'GPSW',];

  model_type: string;

  constructor(
    private resourceService: ResourceService,
    private wowService: NgwWowService,
    private route: ActivatedRoute
    ) { 
      this.model_type = <string|null><unknown>this.route.snapshot.paramMap.get('type');
      console.log(`type:${this.model_type}`);
    }

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
    this.resourceService.getHealthResources(this.gpsn,this.gpsw,this.searchRadius).subscribe(
        resp=>{this.healthResources=resp;console.log(this.healthResources)}
      );
  }

  getConsumableResources() {
    this.resourceService.getConsumableResources(this.gpsn,this.gpsw,this.searchRadius).subscribe(
      resp=>{this.consumableResources=resp;}
    );
  }
  
  getShelterResources() {
    this.resourceService.getShelterResources(this.gpsn,this.gpsw,this.searchRadius).subscribe(
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
    this.wowService.init();

  }

}
