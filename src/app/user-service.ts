import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError,map,tap} from 'rxjs/operators';

import {User} from './interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:44382/users';
  private headers: HttpHeaders;


  constructor(private http:HttpClient) { 
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
    }

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
  // addUser(user: User) : Promise<User> {
  //   console.log(user);
  //     return fetch('https://deckofcardsapi.com/api/deck/new/')
  //         .then(response => response.json())
  //         .then(responseObj => {
  //             this.currentDeckId = responseObj.deck_id;
  //             console.log(this.currentDeckId);
  //         });
  // }
}
