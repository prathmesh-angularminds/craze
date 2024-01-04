import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { SellerHomeLayoutComponent } from 'src/app/layout/seller-layout/seller-home-layout/seller-home-layout.component';

@Injectable({
  providedIn: 'root'
})
export class IsSellerLoggedOutGuard implements CanDeactivate<SellerHomeLayoutComponent>, CanLoad {

  constructor(private router: Router, private cookieService: CookieService) { }

  canDeactivate(component: SellerHomeLayoutComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const accessToken = this.cookieService.get('access_token');

    if (accessToken) {
      this.router.navigate(['/seller/app/products'])
      return false;
    } else {
      return true;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const accessToken = this.cookieService.get('access_token');

    if (accessToken) {
      this.router.navigate(['/seller/app/products'])
      return false;
    } else {
      return true;
    }
  }
}
