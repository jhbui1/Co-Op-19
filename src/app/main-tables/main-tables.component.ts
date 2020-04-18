import { Component, OnInit } from '@angular/core';

import { ResourceService } from '../resource.service';
import { HealthResource } from '../interfaces/health-resource'

@Component({
  selector: 'app-main-tables',
  templateUrl: './main-tables.component.html',
  styleUrls: ['./main-tables.component.scss']
})
export class MainTablesComponent implements OnInit {

  healthResources : HealthResource[] = [];
  headElements = ['ID', 'GPSN', 'GPSW', 'Estimated Cost'];


  constructor(private ResourceService:ResourceService) { }

  getHealthResources() {
    this.ResourceService.getHealthResources().subscribe(
        resp=>{this.healthResources=resp;console.log(this.healthResources)}
      );
  }

  ngOnInit(): void {
    this.getHealthResources();
  }

}
