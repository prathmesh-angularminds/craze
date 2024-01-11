import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService,private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let accessToken = this.cookieService.get('access_token');

    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      })
    }

    return next.handle(request).pipe(catchError((err: any) => {

      if(err instanceof HttpErrorResponse) {
        if(err.status === 401) {

          this.cookieService.removeCookie('access_token');
          this.router.navigate(['/seller/auth']);
        }
      }
      return throwError(() => new Error(err?.error?.message || "Error occurred !!"));
    }));
  }
}
