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
  clickedIndex = 0;

  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.catalogueService.getCategories().subscribe((res: any) => {
    this.categories =  res._embedded.categories;
      console.log(this.categories);
      this.init();
    }, error => {
      console.log("erreur lors de récuperation des categories : ", error);
    }, () => {
      // console.log("complete ...");
    })
  }

  init() {
    this.onGetProducts(this.categories[this.clickedIndex]);
   // show first category products by defauly
  }
  onGetProducts(c: any): void {
    console.log(c._links.products.href);
  let url = c._links.products.href;
  this.router.navigateByUrl('/products/' + btoa(url)).then();
  }

  changeState(index: any) {
    console.log(index);
    this.clickedIndex = index;
  }


}
