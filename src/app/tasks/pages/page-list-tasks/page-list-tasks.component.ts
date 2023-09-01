import { Component, OnInit } from '@angular/core';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-page-list-tasks',
  templateUrl: './page-list-tasks.component.html',
  styleUrls: ['./page-list-tasks.component.scss'],
})
export class PageListTasksComponent implements OnInit {
  // public columns: string[] = ['A FAIRE', 'EN COURS', 'TERMINE', 'BLOQUE'];
  public collection!: Task[];

  public columns = Object.values(StateTask);
  constructor(private tasksService: TasksService) {
    this.tasksService.collection.subscribe((data) => {
      // console.log('collection', data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}
}
