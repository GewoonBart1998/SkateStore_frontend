import { Component, OnInit, Input, } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {


  cartProducts: product[] =[];






  ngOnInit() {


  }

  public loadcart(){
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
      this.cartProducts.push(item);
      // console.log(item);
    }


  }







}
