import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = environment.authToken;
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `token ${token}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
