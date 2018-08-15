import { Component, OnInit } from '@angular/core';
import {CartModel} from "../models/cart.model";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit {
  cart: CartModel;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart
  }

}
