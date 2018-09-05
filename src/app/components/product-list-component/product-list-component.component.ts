import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product/product.service";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  products: ProductModel[];

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy(product) {
    this.cartService.addProduct(product);
  }
}
