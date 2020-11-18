import { Component } from '@angular/core';
import { AuthAdminService } from './auth/auth-admin.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth:AuthService, public authAdmin: AuthAdminService){}
  title = 'angularjwtauth';
}
