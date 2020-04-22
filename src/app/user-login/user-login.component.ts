import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  uname:string = "";
  pwd:string = "";
  logInError:boolean = false;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.getUser(this.uname)
        .then(resp=> {
          debugger; 
          if(resp[0].password.trim()==this.pwd){
            this.userService.loggedIn=true;
            this.router.navigate(['/main']);
          } else {
            this.logInError = true;
            // this.router.navigate(['/main']);
          }
        })
        .catch((err)=>{
          console.log(err);
          this.logInError=true
        })
  }

}
