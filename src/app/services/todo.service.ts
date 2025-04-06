import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: string[] = [];

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
