import {Injectable} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {CategoryEnum} from "../../components/product-component/category.enum";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): ProductModel[] {
    return [
      new ProductModel(
        'Beer',
        'Great Beer',
        100,
        CategoryEnum.Sellable,
        true
      ),
      new ProductModel(
        'Juice',
        'Great Juice',
        50,
        CategoryEnum.Sellable,
        false
      ),
      new ProductModel(
        'Water',
        'Crystal Water',
        15,
        CategoryEnum.Sellable,
        true
      )
    ];
  }
}
