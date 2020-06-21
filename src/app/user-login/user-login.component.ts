import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService,GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Output() updateNav = new EventEmitter();
  signinForm: FormGroup;
  user: SocialUser;
  uname: string = "";
  pwd: string = "";
  logInError:boolean = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    public  userService: UserService,
    private router:Router
    ) { }  
  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
    
  }  
  /**
   * Sign in with google, does not allow admin access
   */
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then( () => {
      this.userService.signIn("Google");
      this.updateNav.emit(null);
      this.router.navigate(['/main']);
    })
    .catch(
      () => this.logInError = true
    );
  }

 
  signOut(): void {
    this.authService.signOut();
    this.userService.signOut();
  }
  /**
   * Sign in with in house login, possibly an admin
   * Redirects to main page upon success
   */
  onSubmit() {
    this.userService.verifyUser(this.uname,this.pwd)
        .then(resp=> {
          console.log(resp)
          if(resp.length>0){
            console.log(resp);
            this.userService.populateUser(resp[0]);
            this.updateNav.emit(null);
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
