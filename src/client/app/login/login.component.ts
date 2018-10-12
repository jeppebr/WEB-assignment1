import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {SchedulesComponent} from "../schedules/schedules.component";

@Component({
    selector: "app-login",
    providers: [UserService],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    constructor(
        private userService: UserService,
        private schedulesComponent: SchedulesComponent
    ) {}

    postLogin(username: string, password: string) {
        this.userService.postLogin(username, password).subscribe(token => {
                localStorage.setItem('token', JSON.stringify(token));
                // this.schedulesComponent.setUser(new User(0, "", "", [], []));
            },
            err => console.log(err)
        );
    }

    postRegister(username: string, password: string) {
        this.userService.postRegister(username, password)
            .subscribe(
                res => {
                    console.log(res)
                    localStorage.setItem('token', JSON.stringify(res))
                },
                err => console.log(err)
            );
    }

    registerUser(form: NgForm) {
        const userName = JSON.stringify(form.value.registerUserName)
        const password = JSON.stringify(form.value.registerPassword)
        this.postRegister(userName, password)
    }

    loginUser(form: NgForm) {
        const userName = JSON.stringify(form.value.loginUserName)
        const password = JSON.stringify(form.value.loginPassword)
        this.postLogin(userName, password);
    }

    logout() {
        localStorage.removeItem('token');
    }

    ngOnInit() {
    }
}
