import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

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

    return this.http.post<User>("http://localhost:3000/api/login", options.body, options);
  }
}
