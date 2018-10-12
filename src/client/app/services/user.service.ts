import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from '../../app-config';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserLoggedIn(username: string): Observable<User> {

    let options = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json',
        "InterceptorSkipHeader": ''
      })
    };
    return this.http.get<User>(`${API_URL}/login/${username}`, options);
  }

  postLogin(username: string, password: string): Observable<User> {

    let options = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json',
        "InterceptorSkipHeader": ''
      }),
      body: {
        username: username,
        password: password
      }
    };

    return this.http.post<User>(`${API_URL}/login`, options.body, options);
  }

  postRegister(username: string, password: string): Observable<User> {

    let options = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json',
        "InterceptorSkipHeader": ''
      }),
      body: {
        username: username,
        password: password
      }
    };

    return this.http.post<User>(`${API_URL}/register`, options.body, options);
  }
  // returns true if user is logged in, false if not
  isLoggedin() {
    return !!localStorage.getItem('token')
  }

  // returns local browser token
  getBrowserToken() { 
    let token = localStorage.getItem('token')
    let jsonToken = JSON.parse(token)
    return jsonToken.token
  }
}
