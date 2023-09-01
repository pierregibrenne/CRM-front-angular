import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-column-tasks',
  templateUrl: './column-tasks.component.html',
  styleUrls: ['./column-tasks.component.scss'],
})
export class ColumnTasksComponent implements OnInit {
  @Input() collection!: Task[];
  @Input() title!: string;
  public filted!: Task[];
  public states = Object.values(StateTask);
  public test: string = 'A FAIRE';

  constructor(private tasksService: TasksService, private router: Router) {
    // console.log(this.collection);
  }

  ngOnInit(): void {}
  goToEdit(obj: Task) {
    this.router.navigate(['edit-task', obj.id]);
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.title);
    this.filted = this.collection.filter(
      (collection) => collection.state === this.title
    );
    console.log(this.filted.length);
  }

  public changeState(item: Task, event: Event) {
    // console.log(item);
    const target = event.target as HTMLSelectElement;
    // console.log(target);
    const state = target.value as StateTask;
    // console.log(state);
    this.tasksService.changeState(item, state).subscribe((data) => {
      // console.log(data);
      Object.assign(item, data);
    });
  }

  public deleteItem(id: Number) {
    this.tasksService.delete(id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
