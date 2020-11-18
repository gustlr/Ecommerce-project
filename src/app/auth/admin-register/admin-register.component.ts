import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../auth-admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  formData: any = {};
  errors: any = [];

  constructor(private auth: AuthAdminService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.errors = [];
    this.auth.register(this.formData)
      .subscribe(() => {
        this.router.navigate(['/admin/admin-login'], { queryParams: { registered: 'success' } });
       },
        (errorResponse) => {
          this.errors.push(errorResponse.error.error);
        });
  }
}
