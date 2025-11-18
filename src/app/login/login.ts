import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppCommonModule } from '../app-common.module';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [AppCommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Login {
  userId: string;
  password: string;

  constructor(private loginSvc: LoginService) {}

  login() {
    this.loginSvc.initiateLogin(this.userId, this.password);
  }
}
