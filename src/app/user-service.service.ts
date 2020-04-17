import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError,map,tap} from 'rxjs/operators';

import {User} from './interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'api/users';

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type' : 'application/json'})
  };

  constructor(
    private http:HttpClient,
    ) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  addUser(user: User) : Observable<User> {
    return this.http.post<User>(this.url,user,this.httpOptions).pipe(
      tap((newUser:User)=>console.log(`added hero w/ id=${newUser.Username}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }
}
