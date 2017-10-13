import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import {appRoutes} from './app.route';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    HomeComponent,
    TodoListComponent
  ],
  imports: [
    HttpModule, BrowserModule, RouterModule.forRoot(appRoutes), MdButtonModule, MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
