import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.models';
import { AsyncPipe, CommonModule, JsonPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [AsyncPipe, CommonModule, DatePipe, RouterLink],
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent {

  todos$: Observable<Todo[]>;

  isOpen = false;
  todoDetail$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos()
  }

  markCompleted(t: Todo) {
    this.todos$ = this.todoService.updateTodo({ ...t, completed: !t.completed })
    this.todoDetail$ = this.todoService.getTodoById(t.id);
  }

  deleteTodo(t: Todo) {
    if (confirm("Are You Sure You Want to Delete This Todo"))
      this.todos$ = this.todoService.deleteTodo(t.id)
  }

  viewTodo(t: Todo) {
    this.isOpen = true;
    this.todoDetail$ = this.todoService.getTodoById(t.id);
  }

  closeView() {
    this.isOpen = false;
    console.log(this.isOpen)
  }
}
