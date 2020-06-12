import { Component, OnInit } from '@angular/core';

import { NgwWowService } from 'ngx-wow';



@Component({
  selector: 'app-main-tables',
  templateUrl: './main-tables.component.html',
  styleUrls: ['./main-tables.component.scss']
})
export class MainTablesComponent implements OnInit {
  
  constructor(
    private wowService: NgwWowService
    ) { }
  
  ngOnInit(): void {
    this.wowService.init();
  }



}
