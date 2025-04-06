import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  newTodo = '';

  constructor(public todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }
}
