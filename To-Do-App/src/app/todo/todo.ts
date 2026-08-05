import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  task: string = '';
  tasks: string[] = [];

  AddTask() {
    if (this.task.trim()) {
      this.tasks.push(this.task.trim());
      this.task = '';
    }
  }

  DeleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}