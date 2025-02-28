import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'todo-app';
}
