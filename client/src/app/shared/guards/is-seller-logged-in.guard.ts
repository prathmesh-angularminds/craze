import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class IsSellerLoggedInGuard implements CanLoad {

  constructor(private router: Router,private cookieService: CookieService) {}
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const accessToken = this.cookieService.get('access_token');

      if(accessToken) {
        return true;
      } else {
        this.router.navigate(['/seller/auth/sign-in'])
        return false;
      }
  }
}
