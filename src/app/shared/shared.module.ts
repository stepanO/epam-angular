import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from "./services/local-storage.service";
import {BgClickDirective} from "./directives/bg-click.directive";
import {Constant, ConstantService} from "./services/constant.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BgClickDirective],
  providers: [LocalStorageService,
    {provide: ConstantService, useValue: Constant}],
  exports: [BgClickDirective]
})
export class SharedModule {
}
