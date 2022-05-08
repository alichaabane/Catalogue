import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "../../../shared/service/http/catalogue.service";
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private catalogueService: CatalogueService, private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof  NavigationEnd) {
      this.route.paramMap.subscribe((params: ParamMap) => {
        let url = String(params.get('urlProds'));
        let decryptUrl = atob(url);
        this.getProducts(decryptUrl);
      });
      }
    });
  }

  getProducts(url: any) {
    this.catalogueService.getResource(url).subscribe((res: any) => {
      this.products = res._embedded.products;
    }, error => {
      console.log(error);
    })

  }

  ngOnInit(): void {
    // this.catalogueService.getProducts().subscribe((res: any) => {
    //   this.products = res._embedded.products;
    //   console.log(this.products);
    // }, error => {
    //   console.log("erreur lors de récuperation des produits : ", error);
    // }, () => {
    //   console.log("complete ...");
    // })
  }

}
