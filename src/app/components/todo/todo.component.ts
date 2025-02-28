import { Component, inject, input } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styles: ``
})
export class TodoComponent {
  todo = input.required<Todo>()
  todoService = inject(TodoService)
}
