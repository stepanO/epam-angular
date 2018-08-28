import {ProductModel} from "./product.model";
import {CartProductModel} from "./cart-product.model";

export class CartModel {
  private _totalCost: number;
  private _count: number;
  products = new Map<string, CartProductModel>();

  get totalCost() {
    return this._totalCost;
  }

  set totalCost(total) {
    if (isNaN(total) || !total) {
      this._totalCost = 0;
    } else {
      this._totalCost = total;
    }
  }

  get totalCount() {
    return this._count;
  }

  set totalCount(count) {
    this._count = count;
  }

  private recalculateTotal() {
    this._totalCost = 0;
    this._count = 0;

    this.products.forEach((product) => {
      this._totalCost += product.totalCost;
      this._count += product.count;
    })
  }

  addProduct(product: ProductModel) {
    let cartProduct = this.products.get(product.ref) ||
      this.products
        .set(product.ref, new CartProductModel(product))
        .get(product.ref);

    cartProduct.add(1);
    this.recalculateTotal();
  }

  removeProduct(product) {
    this.products.delete(product.ref);
    this.recalculateTotal();
  }

  decrease(product) {
    const cartProduct = this.products.get(product.ref);

    if (cartProduct) {
      cartProduct.remove(1);
      this.recalculateTotal();
    }
  }

  clear() {
    this.init()
  }

  private init() {
    this.products = new Map<string, CartProductModel>();
    this.recalculateTotal();
  }
}
