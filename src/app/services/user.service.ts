import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }


  userAuthentication(userName : string, password : string) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    return this.http.post(this.rootUrl + '/login', data);
  }

}