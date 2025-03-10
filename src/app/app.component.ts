import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor(private todoService: TodoService) {
    //As We Are Using Todo Service as not state but to mimic the http request so we are not using list as shared state 
    //so we are making dummy getTodo request so it can save Sample todo in Local Storage 
    //to counter edit/:id will be null if visit directly without home page because there will be no todo
    this.todoService.getTodos();
  }
}
