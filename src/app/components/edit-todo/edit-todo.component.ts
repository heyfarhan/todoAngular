import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, ParamMap, Router } from '@angular/router'
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.models';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-todo.component.html',
  styles: ``
})
export class EditTodoComponent implements OnInit {

  todo$!: Observable<Todo[]>;
  id!: number

  editTodo !: FormGroup;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {

    this.editTodo = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      discription: new FormControl(''),
      completed: new FormControl(''),
      createdAt: new FormControl(''),
    })

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
    })
    this.todoService.getTodoById(this.id).subscribe((data) => {
      this.editTodo.patchValue(data[0])
    })
  }

  updateTodo(form: FormGroup) {
    if (form.valid) {
      this.todoService.updateTodo(this.editTodo.value)
      this.router.navigate(['/'])
    }
  }

}
