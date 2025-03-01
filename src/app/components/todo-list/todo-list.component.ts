import { Component, computed, inject, signal, } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../../services/todo.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { ShimmerTodoComponent } from '../shimmer-todo/shimmer-todo.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoComponent, AddTodoComponent, ShimmerTodoComponent],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent {

  todoService = inject(TodoService)
  todoList = signal<Todo[]>([])

  constructor() {
    this.loadTodos();
  }

  async loadTodos() {
    this.todoList.set(await this.todoService.getTodo());
  }


}
