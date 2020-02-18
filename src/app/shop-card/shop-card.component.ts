import { Component, OnInit, Input, } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import {ActivatedRoute} from "@angular/router";
import { interval } from "rxjs";


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {


  cartProducts: product[] =[];

  constructor(
  ) { }


  ngOnInit() {
    this.loadcart();

  }

  public loadcart(){
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
      console.log(item);
      this.cartProducts.push(new product(item.Id, item.Name, item.Price, item.Description, item.ImagePath));
    }


  }







}
