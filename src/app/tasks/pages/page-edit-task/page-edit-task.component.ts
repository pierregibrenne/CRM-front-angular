import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-page-edit-task',
  templateUrl: './page-edit-task.component.html',
  styleUrls: ['./page-edit-task.component.scss'],
})
export class PageEditTaskComponent implements OnInit {
  public item!: Task;
  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tasksService.getItemById(id).subscribe((data) => {
      this.item = data;
    });
  }

  ngOnInit(): void {}

  onEdit(obj: Task) {
    this.tasksService.update(obj).subscribe((data) => {});
    this.router.navigate(['']);
  }
}
