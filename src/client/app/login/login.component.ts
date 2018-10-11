import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
  selector: "app-login",
  providers: [UserService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user = new User("","", [], []);
  
  constructor(private userService: UserService) {}

  postLogin(user: User) {
    this.userService.postLogin(user).subscribe();
  }

  postRegister(user: User) {
    this.userService.postRegister(user).subscribe();
  }

  registerUser(form: NgForm) {
    this.user.userName = JSON.stringify(form.value.registerUserName)
    this.user.password = JSON.stringify(form.value.registerPassword)
    this.postRegister(this.user)
  }

  loginUser(form: NgForm) {
    this.user.userName = JSON.stringify(form.value.loginUserName)
    this.user.password = JSON.stringify(form.value.loginPassword)
    this.postLogin(this.user)
  }
  
  logout() {
    console.log("logging out")
  }

  ngOnInit() {}
}
