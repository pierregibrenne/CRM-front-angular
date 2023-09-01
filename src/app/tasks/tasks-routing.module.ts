import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { PageListTasksComponent } from './pages/page-list-tasks/page-list-tasks.component';

const routes: Routes = [
  { path: '', component: PageListTasksComponent },
  { path: 'add-task', component: PageAddTaskComponent },
  { path: 'edit-task/:id', component: PageEditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
