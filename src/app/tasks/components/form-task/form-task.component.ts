import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateTask } from 'src/app/core/enums/state-task';
import { Task } from 'src/app/core/models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
})
export class FormTaskComponent implements OnInit {
  public taskForm!: FormGroup;
  @Input() public title!: string;

  public states = Object.values(StateTask);
  @Input() init!: Task;
  @Output() submitted = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private router: Router
  ) {
    console.log('form', this.states);
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      task: [this.init.task, [Validators.required, Validators.maxLength(255)]],
      state: [this.init.state],
      id: [this.init.id],
    });
  }
  public onSubmit() {
    this.submitted.emit(this.taskForm.value); // .next
  }
}
