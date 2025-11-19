import { Component, inject } from '@angular/core';
import { AppCommonModule } from './app-common.module';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  imports: [AppCommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loginSvc = inject(LoginService);

  companyName = 'SV MART';

  logout() {
    this.loginSvc.initiateLogout();
  }
}
