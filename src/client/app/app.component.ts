import {Component} from '@angular/core';
import {User} from "./models/user";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'myFitness';

    user: User;

    updateUser(value: User) {
        this.user = value;
    }

    getUser() {
        return this.user;
    }
}
