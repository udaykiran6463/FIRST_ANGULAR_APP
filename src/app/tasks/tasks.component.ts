import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'learn all the basic and advnced features of angular and how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn TypeScript',
      summary:
        'Understand TypeScript fundamentals and advanced concepts for better Angular development.',
      dueDate: '2024-06-30',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Build a Portfolio',
      summary:
        'Create a personal portfolio website to showcase projects and skills.',
      dueDate: '2024-09-15',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    console.log('Task completed: ', id);
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
