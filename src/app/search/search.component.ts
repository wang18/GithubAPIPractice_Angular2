import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {

  public searchTxt;
  public searchResult;

  constructor(private router: Router, private service: GithubService) { }

  ngOnInit() {
  }
  onKeyup(e) {
    this.searchTxt = e.target.value;
  }
  searchUsers() {
    this.service.getUser(this.searchTxt).subscribe(res => {
      this.searchResult = res;
    });
  }
  getUserId(user) {
    this.router.navigate(['user/', user.login]);
  }

}
