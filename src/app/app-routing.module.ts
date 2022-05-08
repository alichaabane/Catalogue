import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./page/home/home.component";
import {CategoriesComponent} from "./page/admin/categories/categories.component";
import {ProductsComponent} from "./page/admin/products/products.component";
import {UserManagementComponent} from "./page/admin/user-management/user-management.component";
import {LoginComponent} from "./page/login/login.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products/:urlProds', component: ProductsComponent },
  { path: 'userMgm', component: UserManagementComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
