import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HealthResource } from '../interfaces/health-resource';
import { HealthService } from '../interfaces/health-service';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-health-detail',
  templateUrl: './health-detail.component.html',
  styleUrls: ['./health-detail.component.css']
})
export class HealthDetailComponent implements OnInit {
  headElements = ['ID','Name', 'GPSN', 'GPSW', 'Estimated Cost'];
  servHeadElements = ['Service Name','Service Description', 'Average Wait(Hours)', 'Estimated Cost'];

  id:number = -1;
  name:string ="";
  healthResource : HealthResource[] = [];
  healthServices : HealthService[] = [];
  constructor(
    private route:ActivatedRoute,
    private resServ:ResourceService
  ) { }

  ngOnInit(): void {
    this.getRes();
  }

  getRes() {
    const id = <number|null>this.route.snapshot.paramMap.get('id');
    this.resServ.getHealthResource(id)
      .subscribe((resp)=>{
        console.log(resp);
        this.healthResource.push(resp);
        this.name = resp.name;
        this.id= resp.id;
        this.healthServices=resp.services;
      })
  }
}
