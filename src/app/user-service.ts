import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import {User} from './interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://db-19.azurewebsites.net/users';

  constructor(private http:HttpClient) {}

  async addUser(user:User) {
    console.log(user);
    
    return this.http.post<User> (
      this.url,JSON.stringify(user),httpOptions).toPromise();
  }
}
