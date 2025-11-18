import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppCommonModule } from '../app-common.module';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  imports: [AppCommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {
  constructor(private loginSvc: LoginService) {}

  logout() {
    this.loginSvc.initiateLogout();
  }
}
