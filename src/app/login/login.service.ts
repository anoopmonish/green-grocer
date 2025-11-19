import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  router = inject(Router);

  isLoggedIn = false;
  USER_DETAILS: UserDetails | null;

  initiateLogin(userId: string, password: string) {
    this.USER_DETAILS = new UserDetails(userId, '');
    console.log('Password entered:', password);
    this.isLoggedIn = true;
    this.router.navigate(['/biller']);
  }

  initiateLogout() {
    this.USER_DETAILS = null;
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
