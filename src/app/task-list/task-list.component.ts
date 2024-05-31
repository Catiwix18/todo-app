import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];

  toggleTaskCompletion(taskIndex: number) {
    this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
  }
}
