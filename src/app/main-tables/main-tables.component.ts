import { Component, OnInit } from '@angular/core';

import { ResourceService } from '../resource.service';
import { HealthResource } from '../interfaces/health-resource';
import { ShelterResource } from '../interfaces/shelter-resource';
import { ConsumableResource } from '../interfaces/consumable-resource';


@Component({
  selector: 'app-main-tables',
  templateUrl: './main-tables.component.html',
  styleUrls: ['./main-tables.component.scss']
})
export class MainTablesComponent implements OnInit {

  healthResources : HealthResource[] = [];
  shelterResources : ShelterResource[] = [];
  consumableResources : ConsumableResource[] = [];
  headElements = ['ID','Name', 'GPSN', 'GPSW', 'Estimated Cost'];
  consumableHeadElements = ['ID','Name','Quantity', 'GPSN', 'GPSW',];
  shelterHeadElements = ['ID','Name','Vacancy','Rating', 'GPSN', 'GPSW',];

  constructor(private ResourceService:ResourceService) { }

  getHealthResources() {
    this.ResourceService.getHealthResources().subscribe(
        resp=>{this.healthResources=resp;console.log(this.healthResources)}
      );
  }

  getConsumableResources() {
    this.ResourceService.getConsumableResources().subscribe(
      resp=>{this.consumableResources=resp;}
    );
  }
  
  getShelterResources() {
    this.ResourceService.getShelterResources().subscribe(
      resp=>{this.shelterResources=resp;}
    );
  }

  ngOnInit(): void {
    this.getHealthResources();
    this.getShelterResources();
    this.getConsumableResources();
  }



}
