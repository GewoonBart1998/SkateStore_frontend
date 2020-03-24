import { Component, OnInit } from '@angular/core';
import {Account} from "../admin-login/account.model";
import {UserService} from "../services/user-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private account: String;
  userrole;


  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.account = this.userService.getUser()
    this.usercheck();
  }

  usercheck() {
    this.userrole = this.account;
  }

  loguit(){
    this.userService.logUitUser();
  }

}
