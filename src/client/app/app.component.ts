import {Component, OnInit} from '@angular/core';
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'myFitness';
  private _user: User;

  constructor() {}

  ngOnInit() {}


  getUser(): User {
      return this._user;
  }

  setUser(value: User) {
      this._user = value;
  }
}
