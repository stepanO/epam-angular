import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BgClickDirective} from "./directives/bg-click/bg-click.directive";
import {ClickHighlightingDirective} from "./directives/click-highlighting/click-highlighting.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BgClickDirective,
    ClickHighlightingDirective
  ],
  providers: [],
  exports: [
    BgClickDirective,
    ClickHighlightingDirective
  ]
})
export class CoreModule {
}
