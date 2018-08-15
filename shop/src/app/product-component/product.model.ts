import {CategoryEnum} from "./category.enum";

export class ProductModel {


  constructor(public name: string,
              public description: string,
              public price: number,
              public category: CategoryEnum,
              public isAvailable: boolean,
              public count: number = 1) {
  }

  get totalCost() {
    return this.price * this.count;
  }
}
