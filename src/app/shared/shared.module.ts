import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "./service/http/authentication.service";
import {CatalogueService} from "./service/http/catalogue.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthenticationService, CatalogueService]
})
export class SharedModule { }
