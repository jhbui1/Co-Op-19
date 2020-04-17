import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angulargooglemap';
  lat: number = 43.653908;
  lng: number = -79.384293;

}