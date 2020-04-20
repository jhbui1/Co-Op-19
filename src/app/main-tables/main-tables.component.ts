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


  constructor(private ResourceService:ResourceService) { }

  getHealthResources() {
    this.ResourceService.getHealthResources().subscribe(
        resp=>{this.healthResources=resp;console.log(this.healthResources)}
      );
  }

  getConsumableResources() {
    this.ResourceService.getShelterResources().subscribe(
      resp=>{this.shelterResources=resp;console.log(this.healthResources)}
    );
  }
  
  getShelterResources() {
    this.ResourceService.getConsumableResources().subscribe(
      resp=>{this.consumableResources=resp;console.log(this.healthResources)}
    );
  }

  ngOnInit(): void {
    this.getHealthResources();
    this.getShelterResources();
    this.getConsumableResources();
  }



}
