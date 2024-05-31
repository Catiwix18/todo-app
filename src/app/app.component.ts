import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  filteredTasks: { name: string, completed: boolean }[] = [];

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
    this.filteredTasks = [...this.tasks]; // Inicialmente, mostrar todas las tareas
  }

  applyFilter(filter: string) {
    switch (filter) {
      case 'completed':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      case 'uncompleted':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
      default:
        this.filteredTasks = [...this.tasks]; // Todas las tareas
        break;
    }
  }
}
