import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';

import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { ManProductsComponent } from './ManageProducts/man-products/man-products.component';
import { AddProductComponent } from './ManageProducts/add-product/add-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductDetailComponent } from './ManageProducts/product-detail/product-detail.component';
import { ProductUpdateComponent } from './ManageProducts/product-update/product-update.component';
import { ProductDeleteComponent } from './ManageProducts/product-delete/product-delete.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';

import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CompaniesListComponent,
    CompanyAddComponent,
    CompanyDetailComponent,
    CompanyUpdateComponent,
    ManProductsComponent,
    AddProductComponent,
    ManProductsComponent,
    ManageProductComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    HeaderAdminComponent,
    CustomerCartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
