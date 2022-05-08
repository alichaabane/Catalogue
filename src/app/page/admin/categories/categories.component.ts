import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../../../shared/service/http/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.catalogueService.getCategories().subscribe((res: any) => {
    this.categories =  res._embedded.categories;
    console.log(this.categories);
    }, error => {
      console.log("erreur lors de récuperation des categories : ", error);
    }, () => {
      console.log("complete ...");
    })
  }

  onGetProducts(c: any): void {
    console.log(c._links.products.href);
  let url = c._links.products.href;
  this.router.navigateByUrl('/products/' + btoa(url));
  }

}
