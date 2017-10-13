import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [GithubService]
})
export class TodoListComponent implements OnInit {

  public todos;
  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getTodoList().subscribe(res => {
      this.todos = res;
      console.log(res);
    });
  }

}
