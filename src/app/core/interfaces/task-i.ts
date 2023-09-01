import { StateTask } from "../enums/state-task";

export interface TaskI {
  id: number;
  task: string;
  state: StateTask;
}
