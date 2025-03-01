import { Component, inject, input, signal } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styles: ``
})

export class TodoComponent {

  constructor() {

  }
  todoService = inject(TodoService)

  todo = input.required<Todo>()
  isEditing = signal(false)
  editedText = signal('');


  toggleEdit() {
    this.isEditing.set(!this.isEditing());
    if (this.isEditing()) {
      this.editedText.set(this.todo().text);
    }
  }

  saveTodo() {
    if (!this.editedText().trim()) {
      alert('Text cannot be empty!');
      return;
    }
    this.todoService.updateTodo(this.todo().id, this.editedText());
    this.isEditing.set(false);
  }

}

