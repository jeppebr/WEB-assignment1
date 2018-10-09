import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    registerUser(form: NgForm) {
      console.log("register")
      console.log(form.value);
      // {email: '...', password: '...'}
      // ... <-- now use JSON.stringify() to convert form values to json.
    }

    loginUser(form: NgForm) {
      console.log("login")
      console.log(form.value);
      // {email: '...', password: '...'}
      // ... <-- now use JSON.stringify() to convert form values to json.
    }


  sendLoginInfo() {
    console.log("sendLoginInfo")

    // var body = 'username=myusername&password=mypassword';
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // this.HttpClient
    //   .post('/api',
    //     body, {
    //       headers: headers
    //     })
    //     .subscribe(data => {
    //           alert('ok');
    //     }, error => {
    //         console.log(JSON.stringify(error.json()));
    //     });
}

  

  constructor() { }

  ngOnInit() {
  }

}
