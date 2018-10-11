import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

// class inpired by https://github.com/gopinav/Angular-Authentication-Tutorial
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    let requestWithToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer xx.yy.zz'
      }
    })
    return next.handle(requestWithToken)
  }
}
