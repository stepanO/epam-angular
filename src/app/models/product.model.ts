import {CategoryEnum} from "../components/product-component/category.enum";

export class ProductModel {
  readonly ref: string;

  constructor(public name: string,
              public description: string,
              public price: number,
              public category: CategoryEnum,
              public isAvailable: boolean) {
    this.ref = name.trim();
  }
}
