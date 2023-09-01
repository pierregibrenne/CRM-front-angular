import { StateTask } from "../enums/state-task";
import { TaskI } from "../interfaces/task-i";

export class Task implements TaskI{
  id!: number;
  task!: string;
  state = StateTask.TODO;

  constructor(obj?: Partial<Task>){
    if (obj) {
      Object.assign(this, obj)
    }
  }
}
