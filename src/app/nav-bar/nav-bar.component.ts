import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  scrollToTables(): void {
    let target = document.getElementById("tables");
    target?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});
  }

  ngOnInit(): void {
  }

}
