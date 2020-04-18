import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-options',
  templateUrl: './main-options.component.html',
  styleUrls: ['./main-options.component.scss']
})
export class MainOptionsComponent implements OnInit {

  constructor() { }

  scrollToTables() {
    let x = document.getElementById("tables");
    x?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  ngOnInit(): void {
  }

}
