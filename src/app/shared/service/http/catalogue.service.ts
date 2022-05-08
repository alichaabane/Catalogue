import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public readonly API = environment.catalogueApi + "/";

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get(this.API + `categories`);
  }

  public getProducts() {
    return this.http.get(this.API + `products`);
  }
  public getResource(url:any){
    return this.http.get(url);
  }
}
