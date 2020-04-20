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

  private handleError<T>(operation = 'operation', result?: T) {
    console.log("error");
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  async addUser(user:User) {
    console.log(user);
    
    return this.http.post<User> (
      this.url,JSON.stringify(user),httpOptions).toPromise();
    // const resp = await fetch('https://localhost:44382/users',{
    //   method:"POST",
    //   mode: "cors",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(user)
    // });
    // return resp.json();
  }
}
