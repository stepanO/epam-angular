import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product/product.service";
import {ProductModel} from "../product-component/product.model";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  products: ProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
