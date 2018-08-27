import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../models/product.model";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() onBuy = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }
}
