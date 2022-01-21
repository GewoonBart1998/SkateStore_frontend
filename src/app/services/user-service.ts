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
    return this.api.post('/auth/loginAdmin', account).subscribe(res =>{
      this.storeJwt(res);
      this.router.navigate(['/admin-product-list']);

    })
  }

  logUitUser(){
    this.cookieservice.deleteAll();
    window.location.reload();
  }


  getUser(){
    let currentUserRol = this.cookieservice.get('currentUserRol');
    // console.log(this.cookieservice.get('currentUserRol'))
    return currentUserRol;
  }

  isUserLoggedIn() {
    return this.cookieservice.get('currentUserRol') =="ADMIN";
  }


  /*https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library */
  private decodeJWT(jwtToken: string) {


    if (jwtToken === null || jwtToken == undefined || jwtToken.length === 0) {
      return '';
    }


    const base64Url = jwtToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  storeJwt(res: any) {
    const jwtToken = res["content"].key;
    console.log(this.decodeJWT(jwtToken))
    console.log(this.decodeJWT(jwtToken).account_rol)
    this.cookieservice.set("currentUserRol" , this.decodeJWT(jwtToken).account_rol);
    this.cookieservice.set("currentUserName" , this.decodeJWT(jwtToken).account_name);

  }
}
