import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from './interfaces/user';
import { environment } from 'src/environments/environment';
import { AuthService, SocialUser } from 'angularx-social-login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn: boolean = false;
  private readonly url:string = environment.dbURL+"/users";
  private user: User;
  private socialUser: SocialUser; 
  private userType: string;
  
  
  constructor(
    private http:HttpClient,
    private authService: AuthService
    ) {}

  async verifyUser(username:string,password:string) {
    let authorizationData = 'Basic ' + btoa(username + ':' + password);

    const headerOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': authorizationData
        })
    };
    return this.http.get<User[]> (
      this.url+"/username",headerOptions).toPromise(); 
  }
  

  async addUser(user:User,addingAdmin:boolean = false) {
    console.log(JSON.stringify(user));

    return this.http.post<User> (
      this.url,JSON.stringify(user),httpOptions).toPromise();
  }

  get logInStatus() {
    return this.loggedIn;
  }
  get isAdmin(){
    let thisUser = this.user as User;
    return this.user ? thisUser.isAdmin : false ;
  }

  get User() {
    return this.user;
  }

  set SocialUser(user:SocialUser) {
    this.socialUser=user;
  }

  get type(){
    return this.userType;
  }

  getAuthToken() {
    return this.authService.authState.toPromise();
  }

  populateUser(user:User) {
    this.user = user;
    this.userType = "Basic";
    this.loggedIn = true;
  }

  signIn(type:string) {
    this.authService.authState.toPromise()
      .then((user)=>this.socialUser = user);
    this.loggedIn = true;
    this.userType = type;
  }

  signOut() {
    this.loggedIn=false;
  }

 
}
