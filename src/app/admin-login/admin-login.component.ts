import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {UserService} from '../services/user-service';
import { storageService } from '../services/storage-service';
import {Account} from "./account.model";
import {product} from "../shopping-list/shop-item.model";
import {CookieService} from "ngx-cookie-service";


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
    private storageService: storageService,
    private cookieservice: CookieService

  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.userLoginForm = new FormGroup({
      Account_name: new FormControl(),
      Account_password: new FormControl(),
    });
  }

  onLogin() {
    this.userService.login(this.userLoginForm.value).subscribe(Account => {
      // @ts-ignore
      this.cookieservice.set("currentUser" , Account.account_rol);
    });
  }
}
