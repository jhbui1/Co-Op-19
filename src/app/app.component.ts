import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulargooglemap';
  lat: number = 43.653908;
  lng: number = -79.384293;
}