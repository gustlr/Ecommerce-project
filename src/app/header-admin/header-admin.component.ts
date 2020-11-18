import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../auth/auth-admin.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router: Router, public adminAuth: AuthAdminService) { }

  ngOnInit(): void {
  }
  logoutAdmin(): void {
    this.adminAuth.logout();
    this.router.navigateByUrl('/admin/admin-login');
    this.router.navigate(['../admin/admin-login'], {queryParams: {loggedOut: 'success'}});
    console.log("Something")
  }
  doSomthing():void{
    console.log("Something")
  }
}
