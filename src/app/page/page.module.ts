import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {UserManagementComponent} from "./admin/user-management/user-management.component";
import {CategoriesComponent} from "./admin/categories/categories.component";
import {ProductsComponent} from "./admin/products/products.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    UserManagementComponent,
    CategoriesComponent,
    ProductsComponent,
    LoginComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PageModule { }
