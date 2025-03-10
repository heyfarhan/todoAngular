import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.models';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list!: Todo[];
  todo!: Todo[];

  private getTodosFromLocalStorage(): Todo[] {
    const storedTodos = localStorage.getItem('list');
    return storedTodos ? JSON.parse(storedTodos) : [
      {
        id: 55,
        title: "Learn ReactJs",
        discription: "Start with Components then props then hooks useState, useEffect ,etc",
        createdAt: new Date(),
        completed: true
      },
      {
        id: 1,
        title: "Learn NextJs",
        discription: "Start with page.js then api route.js then middleware,etc",
        createdAt: new Date(),
        completed: false
      },
      {
        id: 2,
        title: "Learn Angular",
        discription: "Start with Components then Data Binding, then Service, Routing ,etc",
        createdAt: new Date(),
        completed: false
      },
    ];
  }

  private saveTodosToLocalStorage(todos: Todo[]) {
    localStorage.setItem('list', JSON.stringify(todos));
  }

  getTodos(): Observable<Todo[]> {
    this.list = this.getTodosFromLocalStorage()
    this.saveTodosToLocalStorage(this.list)
    return of(this.list).pipe(delay(1000))
  }

  updateTodo(todo: Todo): Observable<Todo[]> {
    this.list = this.list.map((t) => {
      if (t.id == todo.id) {
        t = { ...todo }
      }
      return t
    })
    this.saveTodosToLocalStorage(this.list)
    return of(this.list).pipe(delay(1000))

  }

  deleteTodo(id: number) {
    this.list = this.list.filter((t) => {
      return t.id !== id
    })
    this.saveTodosToLocalStorage(this.list)
    return of(this.list).pipe(delay(1000))
  }

  getTodoById(id: number) {
    this.todo = this.list.filter((t) => {
      return t.id == id
    })
    return of(this.todo).pipe(delay(500))
  }

  addTodo(data: any) {
    this.list.push({
      ...data,
      id: Number(new Date()),
      createdAt: false,
      completed: false
    })
    this.saveTodosToLocalStorage(this.list)
    return of(this.list).pipe(delay(500))
  }

  getSortTodoById() {
    this.list.sort((a, b) => a.id - b.id)
    console.log(this.list)
    return of(this.list).pipe(delay(500))
  }

}

