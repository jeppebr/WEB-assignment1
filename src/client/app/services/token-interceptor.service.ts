import {Injectable, Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})

// class inspired by https://github.com/gopinav/Angular-Authentication-Tutorial
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  // InterceptorSkipHeader inspired by: https://stackoverflow.com/questions/46469349/how-to-make-an-angular-module-to-ignore-http-interceptor-added-in-a-core-module
  intercept(req, next) {
      if (req.headers.has("InterceptorSkipHeader")) {
          const headers = req.headers.delete("InterceptorSkipHeader");
          return next.handle(req.clone({ headers }));
      }
    let userService = this.injector.get(UserService);
    let token = userService.getBrowserToken();
    let requestWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(requestWithToken)
  }
}
