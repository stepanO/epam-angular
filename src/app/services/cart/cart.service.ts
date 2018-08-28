import {Injectable} from '@angular/core';
import {CartModel} from "../../models/cart.model";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {CartProductModel} from "../../models/cart-product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart = new CartModel();
  private cart$ = new BehaviorSubject(this._cart);

  constructor() {
  }

  getCart$() {
    return this.cart$.asObservable();
  }

  addProduct(product) {
    if (!product.isAvailable) {
      return;
    }
    this._cart.addProduct(product);
    this.cart$.next(this._cart);
  }

  removeProduct(product) {
    this._cart.removeProduct(product);
    this.cart$.next(this._cart);
  }

  decreaseCountProduct(product: CartProductModel) {
    this._cart.decrease(product);
    this.cart$.next(this._cart);
  }

  clearCart() {

  }
}


