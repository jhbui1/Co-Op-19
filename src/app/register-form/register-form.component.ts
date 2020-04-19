import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../user-service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  
  user:User = this.resetUser();
  submitted = false;
  dbUpdateError = false;

  setUserPos(pos:Position) {
    this.user.gpsn = pos.coords.latitude;
    this.user.gpsw = pos.coords.longitude;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos=>this.setUserPos(pos));
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  resetUser() : User {
    let new_user = new User(0,"","","","",0,"",0,0);
    this.getLocation();
    return new_user;
  }

  onSubmit() {
    this.dbUpdateError = false;
    this.userService.addUser(this.user)
      .then()
      .catch(()=>this.dbUpdateError=true);
    this.user=this.resetUser();
    this.submitted = true;
  }

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.getLocation();
  }

}
