import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getUser(t): Observable<any> {
    const url = 'http://api.github.com/search/users?q=' + t;
    return this.http.get(url).map(res => {
      const data = res.json();
      return data;
    });
  }

  getUserDetail(userId): Observable<any> {
    const url = 'http://api.github.com/users/' + userId;
    return this.http.get(url).map( res => {
      const data = res.json();
      return data;
    });
  }

  getTodoList(): Observable<any>{
    const todoUrl = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(todoUrl).map(todo => {
      return todo.json();
    });
  }

}
