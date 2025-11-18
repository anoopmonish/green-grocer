// Example CanActivate guard
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginSvc: LoginService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAuthenticated = false;

    if (this.loginSvc.isLoggedIn) {
      isAuthenticated = true;
    }

    if (isAuthenticated) {
      return true;
    } else {
      return this.router.createUrlTree(['/']);
    }
  }
}
