import { Injectable } from '@angular/core';
import {CartModel} from "../../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  get cart(): CartModel {
    return this._cart;
  }

  set cart(value: CartModel) {
    this._cart = value;
  }

  private _cart = new CartModel();

  constructor() { }

  addProduct(product) {
    this._cart.addProduct(product);
  }

  removeProduct(product) {
    this.cart.addProduct(product);
  }
}


