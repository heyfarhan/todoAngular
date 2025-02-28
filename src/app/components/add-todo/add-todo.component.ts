import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styles: ``
})
export class AddTodoComponent {

  todoService = inject(TodoService);
  // text = signal<string>("");

  // addTodo() {
  //   this.todoService.addTodo(this.text());
  //   this.text("");
  // }

}
