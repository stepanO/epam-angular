import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing.module';
import {UserArrayService, UserComponent} from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [UserComponent],
  providers: [UserArrayService]
})
export class UsersModule {
}
