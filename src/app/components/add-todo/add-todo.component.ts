import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styles: ``
})
export class AddTodoComponent {

  newTodo!: FormGroup;

  constructor(private todoService: TodoService, private router: Router) {

    this.newTodo = new FormGroup({
      title: new FormControl('', Validators.required),
      discription: new FormControl('')
    })
  }

  addTodo(form: FormGroup) {
    this.todoService.addTodo(form.value)
    this.router.navigate(['/'])
  }

}
