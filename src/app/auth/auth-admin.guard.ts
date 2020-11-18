import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAdminService } from './auth-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  private url: string;
  constructor(private auth: AuthAdminService, private router: Router) { }

  private authState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  private notAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['/admin/admin-login']);
    return false;
  }
  private isLoginOrRegister(): boolean {
    if (this.url.includes('/admin/admin-login') || this.url.includes('/auth/register')) {
      return true;
    }
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.url = state.url;
    if (this.auth.isAuthenticated()) {
     return this.authState();
    }
    return this.notAuthState();
  }
  
}
