import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {UserService} from '../services/user-service';
import { storageService } from '../services/storage-service';
import {Account} from "./account.model";


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

  ) {
  }

  ngOnInit() {
    // if (this.userService.isUserLoggedIn()) {
    //   this.router.navigate(['/home']);
    // }
    this.buildForm();
  }

  private buildForm() {
    this.userLoginForm = new FormGroup({
      Account_name: new FormControl(),
      Account_password: new FormControl(),
    });
  }

  onLogin() {
    // console.log(this.userLoginForm.value);
    this.userService.login(this.userLoginForm.value).subscribe(response => {
      localStorage.setItem("currentUser" , JSON.stringify({name: response.accountName, rol: response.accountRol }));
    });


  }

}
