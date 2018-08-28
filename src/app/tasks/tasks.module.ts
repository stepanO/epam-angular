import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TasksRoutingModule} from './tasks-routing.module';
import {FormsModule} from '@angular/forms';
import {TaskComponent, TaskFormComponent, TaskListComponent} from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
  ],
  declarations: [TaskListComponent, TaskComponent, TaskFormComponent]
})
export class TasksModule {
}
