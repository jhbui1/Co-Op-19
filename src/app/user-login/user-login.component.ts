import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, FacebookLoginProvider,GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;  
  uname:string = "";
  pwd:string = "";
  logInError:boolean = false;
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private userService:UserService,
    private router:Router
    ) { }  
  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
    
  }  

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then( (resp) => {
      this.userService.loggedIn=true;
    })
    .catch();
  }
  signOut(): void {
    this.authService.signOut();
    this.userService.loggedIn=false;
  }
  onSubmit() {
    this.userService.getUser(this.uname)
        .then(resp=> {
          if(resp[0].password.trim()==this.pwd){
            this.userService.loggedIn=true;
            this.router.navigate(['/main']);
          } else {
            this.logInError = true;
          }
        })
        .catch((err)=>{
          console.log(err);
          this.logInError=true
        });
  }

}
