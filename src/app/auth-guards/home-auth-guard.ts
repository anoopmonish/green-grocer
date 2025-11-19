// Example CanActivate guard
import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeAuthGuard implements CanActivate {
  router = inject(Router);
  loginSvc = inject(LoginService);

  canActivate() {
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
