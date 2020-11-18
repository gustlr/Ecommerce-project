import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { AuthAdminService } from '../auth/auth-admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, public adminAuth:AuthAdminService) { }

  ngOnInit(): void {
  }

  logoutCustomer(): void {
    this.auth.logout();
    this.adminAuth.logout();
    this.router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});
    location.reload();
  }
 
}
