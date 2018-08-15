import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "./product.model";
import {CategoryEnum} from "./category.enum";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {

  }

  onBuy() {
    this.cartService.addProduct(this.product);
  }
}
