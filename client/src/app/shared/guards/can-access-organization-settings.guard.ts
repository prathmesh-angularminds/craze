import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessOrganizationSettingsGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let userType: string = "Admin";
    let token: string = "token";

    // If user is admin then only he can access organization settings
    if (userType === 'Admin') {
      return true;
    } else {

      // If he ties to access organization setting and he is not admin route him to products page
      if (token) {
        this.router.navigate(['/seller/app/products'])
      }

      // If he is session expires then route to sign-in page
      this.router.navigate(['/seller/auth/sign-in'])
      return false
    }

  }
}
