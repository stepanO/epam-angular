import {NgModule, Optional, SkipSelf} from '@angular/core';

import { AboutComponent, MessagesComponent, PathNotFoundComponent, MessagesService } from '.';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent],
  providers: [MessagesService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
