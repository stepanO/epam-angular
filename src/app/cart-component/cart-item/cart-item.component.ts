import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartProductModel} from "../../models/cart-product.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input('item') product: CartProductModel;
  @Output() onIncrease: EventEmitter<any> = new EventEmitter();
  @Output() onDecrease: EventEmitter<any> = new EventEmitter();
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
