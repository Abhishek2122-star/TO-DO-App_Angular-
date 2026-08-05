import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  task: = '';
  tasks: string[] = [];

  AddTask(){
    if (this.task.trim()){
      this.task.push(this task);
      this.task = '';
        
    }
  }
}
