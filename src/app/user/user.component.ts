import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {GithubService} from '../github/github.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GithubService]
})
export class UserComponent implements OnInit {
  public user;
  constructor(private service: GithubService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const userid = this.actRouter.snapshot.params['userId'];
    this.service.getUserDetail(userid).subscribe(res => {
      this.user = res;
      console.log(res);
    });
  }

}
