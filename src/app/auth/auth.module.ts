import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {AuthAdminComponent} from './auth-admin/auth-admin.component';
import {AuthAdminGuard} from './auth-admin.guard';
import { AdminRegisterComponent } from './admin-register/admin-register.component'
const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
     { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path:'admin',
    component: AuthAdminComponent,
    children:[
      {path:'admin-login', component: AdminLoginComponent, canActivate:[AuthAdminGuard]},
      { path: 'admin-register', component: AdminRegisterComponent }
    ]
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    AdminLoginComponent,
    AuthAdminComponent,
    AdminRegisterComponent
   
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
