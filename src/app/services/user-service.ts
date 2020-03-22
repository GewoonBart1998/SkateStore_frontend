import {Injectable} from '@angular/core';
import { ApiService } from '../services/api-service';
import {Account} from "../admin-login/account.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private api: ApiService) {
  }

  login(account: Account){
    return this.api.post('/login', account)
  }

  getUser(){
    return localStorage.getItem("CurrentUser")
  }
}
