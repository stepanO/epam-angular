import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from "./services/local-storage.service";
import {BgClickDirective} from "./directives/bg-click.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BgClickDirective],
  providers: [LocalStorageService],
  exports: [BgClickDirective]
})
export class SharedModule {
}
