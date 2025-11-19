import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Biller } from './biller/biller';
import { BasicAuthGuard } from './auth-guards/basic-auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'biller',
    component: Biller,
    canActivate: [BasicAuthGuard]
  }
];
