import {ProductModel} from "./product.model";

export class CartProductModel extends ProductModel {
  constructor(public product: ProductModel,
              public count: number = 0) {
    super(product.name, product.description, product.price, product.category, product.isAvailable);
  }

  get totalCost() {
    return this.price * this.count;
  }

  add(count: number = 1) {
    this.count += count;
  }

  remove(count: number = 1) {
    if (this.count > 0) {
      this.count -= count;
    }
  }
}
