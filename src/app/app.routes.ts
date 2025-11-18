import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { HomeAuthGuard } from './auth-guards/home-auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'home',
    component: Home,
    canActivate: [HomeAuthGuard]
  }
];
