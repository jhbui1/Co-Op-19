import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  async canDeactivate() {
    window.scrollTo({left:0,top:0,behavior: 'auto'});
    async function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }
    await delay(100);
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
