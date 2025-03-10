import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, ParamMap } from '@angular/router'
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.models';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  imports: [RouterLink, AsyncPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-todo.component.html',
  styles: ``
})
export class EditTodoComponent implements OnInit {

  todo$!: Observable<Todo[]>;
  id!: number

  editTodo !: FormGroup;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {

    this.editTodo = new FormGroup({
      title: new FormControl('', Validators.required),
      discription: new FormControl('')
    })

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
    })
    this.todo$ = this.todoService.getTodoById(this.id)
  }

  updateTodo(form: FormGroup) {
    console.log(form.value)
  }

}
