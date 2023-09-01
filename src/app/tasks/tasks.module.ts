import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { PageListTasksComponent } from './pages/page-list-tasks/page-list-tasks.component';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';

import { FormTaskComponent } from './components/form-task/form-task.component';
import { ColumnTasksComponent } from './components/column-tasks/column-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageListTasksComponent,
    PageAddTaskComponent,
    PageEditTaskComponent,
    FormTaskComponent,
    ColumnTasksComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TasksModule {}
