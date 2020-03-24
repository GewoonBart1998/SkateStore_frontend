import {Injectable} from '@angular/core';
import { ApiService } from '../services/api-service';
import {Account} from "../admin-login/account.model";
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private api: ApiService,
              private router: Router,
              private cookieservice: CookieService
  ) {
  }

  login(account: Account){
    this.router.navigate(['/admin-product-list'])
    return this.api.post('/login', account)
  }

  logUitUser(){
    this.cookieservice.deleteAll();
    window.location.reload();
  }

  getUser(){
    let currentUser = this.cookieservice.get('currentUser');
    return currentUser;
  }

  isUserLoggedIn() {
    return this.cookieservice.get('currentUser') =="ADMIN";
  }
}
