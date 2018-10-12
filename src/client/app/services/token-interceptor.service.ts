import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})

// class inpired by https://github.com/gopinav/Angular-Authentication-Tutorial
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let userService = this.injector.get(UserService)
    let token = JSON.stringify(userService.getBrowserToken())
    let requestWithToken = req.clone({
      setHeaders: {
        Authorization: `bearer ${token}`
      }
    })
    return next.handle(requestWithToken)
  }
}
