import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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
