
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';

import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyUpdateComponent} from './company-update/company-update.component';
import { ManProductsComponent } from './ManageProducts/man-products/man-products.component';
import { AddProductComponent } from './ManageProducts/add-product/add-product.component';
import { ProductDetailComponent } from './ManageProducts/product-detail/product-detail.component';
import {ProductUpdateComponent} from './ManageProducts/product-update/product-update.component';
import { AuthAdminGuard } from './auth/auth-admin.guard';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'customerLogin', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'company_list', component: CompaniesListComponent, canActivate: [AuthAdminGuard] },
  { path: 'company_add', component: CompanyAddComponent, canActivate: [AuthAdminGuard] },
  { path: 'company_detail', component: CompanyDetailComponent, canActivate: [AuthAdminGuard] },
  { path: 'company_update', component: CompanyUpdateComponent, canActivate: [AuthAdminGuard]},
  { path: 'product_list', component: ManProductsComponent, canActivate: [AuthAdminGuard]},
  { path: 'product_add', component: AddProductComponent, canActivate: [AuthAdminGuard]},
  { path: 'product_detail', component: ProductDetailComponent, canActivate: [AuthAdminGuard]},
  { path: 'product_update', component: ProductUpdateComponent, canActivate: [AuthAdminGuard]},
  { path: 'cart', component: CustomerCartComponent,canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
