import { Component, computed, inject, signal, } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../../services/todo.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoComponent, AddTodoComponent],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent {

  todoService = inject(TodoService)
  todoList = computed(() => this.todoService.todoList());


}
