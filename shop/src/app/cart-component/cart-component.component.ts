import {Component, OnInit} from '@angular/core';
import {CartModel} from "../models/cart.model";
import {CartService} from "../services/cart/cart.service";
import {CartProductModel} from "../models/cart-product.model";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit {
  cart: CartModel;
  products: CartProductModel[];
  private cartSubscriber: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    const cart$ = this.cartService.getCart$();
    this.cartSubscriber = cart$.subscribe((cart) => {
      this.cart = cart;
      this.products = Array.from(cart.products.values());
    });
  }

  ngOnDestroy() {
    this.cartSubscriber.unsubscribe();
  }

  onRemove(product) {
    this.cartService.removeProduct(product);
  }

  increaseProduct(product) {
    this.cartService.addProduct(product);
  }
  decreaseProduct(product) {
    this.cartService.decreaseCountProduct(product);
  }

}
