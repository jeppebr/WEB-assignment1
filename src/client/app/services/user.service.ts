import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {API_URL} from '../../app-config';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  postLogin(user: User): Observable<User> {

    let options = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json'
      }),
      body: {
        username: user.userName,
        password: user.password
      }
    };

    return this.http.post<User>(`${API_URL}/login`, options.body, options);
  }

  postRegister(user: User): Observable<User> {

    let options = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json'
      }),
      body: {
        username: user.userName,
        password: user.password
      }
    };

    return this.http.post<User>(`${API_URL}/register`, options.body, options);
  }

}
