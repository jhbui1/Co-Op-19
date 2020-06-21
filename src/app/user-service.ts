import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from './interfaces/user';
import { environment } from 'src/environments/environment';
import { AuthService } from 'angularx-social-login';

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
    return this.user ? this.user.isAdmin : false ;
  }

  get User() {
    return this.user;
  }

  get type(){
    return this.userType;
  }

  getAuthToken() {
    this.authService.authState.subscribe((user) => {
      return user;
    });
  }

  populateUser(user:User) {
    this.user = user;
    this.userType = "Basic";
    this.loggedIn = true;
  }

  signIn(type:string) {
    this.loggedIn = true;
    this.userType = type;
  }

  signOut() {
    this.loggedIn=false;
  }

 
}
