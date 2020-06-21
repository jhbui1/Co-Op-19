import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private userService: UserService) { }

  scrollToTables(): void {
    let target = document.getElementById("tables");
    target?.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});
  }

  /**
   * Calls all update methods in response to generic nav update event
   */
  update() {
    this.updateLoginText();
  }

  updateLoginText() {
    var logInBtn = document.getElementById("logInBtn");
    if(this.userService.logInStatus) {
      logInBtn.innerHTML="Log out"
    }
    else {
      logInBtn.innerHTML="Login"

    }
  }
  ngOnInit(): void {
    this.updateLoginText();
  }

}
