import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponentComponent} from './components/product-component/product-component.component';
import {ProductListComponentComponent} from './components/product-list-component/product-list-component.component';
import {ProductService} from "./services/product/product.service";
import {CartComponentComponent} from './components/cart-component/cart-component.component';
import {CartItemComponent} from './components/cart-component/cart-item/cart-item.component';
import {CoreModule} from "./shared/core.module";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {ConfigOptionsService} from "./shared/services/config-options.service";
import {LocalStorageService} from "./shared/services/local-storage.service";
import {GeneratorService} from "./shared/services/generator.service";
import {Constant, ConstantsService} from "./shared/services/constantsService";

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartComponentComponent,
    CartItemComponent,
    ContactUsComponent
  ],
  providers: [ProductService, LocalStorageService,
    ConfigOptionsService,
    GeneratorService,
    {provide: ConstantsService, useValue: Constant}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
