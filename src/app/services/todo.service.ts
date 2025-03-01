import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList = signal<Todo[]>([{
    id: 1,
    text: "Learn React",
    completed: true,
    createdAt: new Date()
  },
  {
    id: 2,
    text: "Learn Angular",
    completed: false,
    createdAt: new Date()
  },
  {
    id: 3,
    text: "Learn NextJs",
    completed: false,
    createdAt: new Date()
  },
  ]);

  toggleTodo(id: number) {
    this.todoList.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  deleteTodo(id: number) {
    this.todoList.update(todos =>
      todos.filter(todo =>
        todo.id !== id
      )
    );
  }

  addTodo(text: string) {
    const trimmedText = text.trim();

    if (!trimmedText) {
      alert("Todo cannot be empty!");
      return;
    }

    const isDuplicate = this.todoList().some(todo => todo.text.toLowerCase() === trimmedText.toLowerCase());
    if (isDuplicate) {
      alert("Todo already exists!");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
      createdAt: new Date()
    };

    this.todoList.update(todos => [...todos, newTodo]);
  }

  updateTodo(id: number, newText: string) {
    this.todoList.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }


}

