import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from './interfaces/user';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loggedIn:boolean = false;
  readonly url:string = environment.dbURL+"/users";
  
  
  constructor(private http:HttpClient) {}

  async getUser(username:string) {
    return this.http.get<User[]> (
      this.url+"/username/"+username,httpOptions).toPromise();
  }

  async addUser(user:User) {
    console.log(user);
    return this.http.post<User> (
      this.url,JSON.stringify(user),httpOptions).toPromise();
  }
}
