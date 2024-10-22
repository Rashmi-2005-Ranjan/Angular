import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
onTaskComplete(id: string) {
  this.tasks = this.tasks.filter(task => task.taskId !== id);
}
  name = input.required<string>();
  @Input({ required: true }) userId!: string;

  public get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  tasks = [
    {
      taskId: 't1',
      userId: 'u1',
      title: 'Learn Typescript',
      summary: 'Learn All The Basic And Advanced Concept',
      dueDate: '2024-10-25',
    },
    {
      taskId: 't2',
      userId: 'u2',
      title: 'Learn Javascript',
      summary: 'Learn All The Basic And Advanced Concept',
      dueDate: '2024-10-27',
    },
    {
      taskId: 't3',
      userId: 'u3',
      title: 'Learn Angular',
      summary: 'Learn All The Basic And Advanced Concept',
      dueDate: '2024-10-26',
    },
    {
      taskId: 't4',
      userId: 'u4',
      title: 'Learn Java',
      summary: 'Learn All The Basic And Advanced Concept',
      dueDate: '2024-10-26',
    },
    {
      taskId: 't5',
      userId: 'u5',
      title: 'Learn Kotlin',
      summary: 'gvaddgas',
      dueDate: '2024-10-26',
    },
    {
      taskId: 't6',
      userId: 'u6',
      title: 'Learn C++',
      summary: 'Learn All The Basic And Advanced Concept',
      dueDate: '2024-10-26',
    }
  ]
}