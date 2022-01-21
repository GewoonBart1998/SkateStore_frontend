import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';
import {UserService} from '../services/user-service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  userLoginForm : FormGroup;



  constructor(
    private router: Router,
    private userService: UserService,

  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.userLoginForm = new FormGroup({
      account_name: new FormControl(),
      account_password: new FormControl(),
    });
  }

  onLogin() {
    this.userService.login(this.userLoginForm.value)
  }
}
