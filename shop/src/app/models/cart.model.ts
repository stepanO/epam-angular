import {ProductModel} from "../product-component/product.model";

export class CartModel {
  products = new Set<ProductModel>();
  _total = 0;

  get total() {
    return this._total;
  }

  set total(total) {
    if (isNaN(total) || !total) {
      this._total = 0;
    } else {
      this._total = total;
    }
  }
  
  private recalculateTotal() {
    this._total = Array.from(this.products).reduce((sum, product) => sum += product.totalCost, 0)
  }

  addProduct(product: ProductModel) {
    if (this.products.has(product)) {
      product.count++;
    } else {
      this.products.add(product);
    }
    this.recalculateTotal();
  }

  removeProduct(product) {
    this.products.delete(product);
    this.recalculateTotal();
  }
}
