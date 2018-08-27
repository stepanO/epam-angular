import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import {ProductService} from "./services/product/product.service";
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CartItemComponent } from './cart-component/cart-item/cart-item.component';
import { BgClickDirective } from './directives/bg-click/bg-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartComponentComponent,
    CartItemComponent,
    BgClickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
