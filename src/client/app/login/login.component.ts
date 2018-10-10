import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  providers: [UserService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user = new User("bob","alice"); 
  
  constructor(private userService: UserService) {}

  postLogin(user: User) {
    this.userService.postLogin(user).subscribe();
  }

  registerUser(form: NgForm) {
    console.log("register");
    console.log(form.value);
  }

  loginUser(form: NgForm) {
    console.log("login");
    console.log(form.value);
    this.user.userName = JSON.stringify(form.value.loginUserName)
    this.user.password = JSON.stringify(form.value.loginPassword)
    this.postLogin(this.user)
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

  sendLoginInfo() {
    console.log("sendLoginInfo");
  }

  ngOnInit() {}
}
