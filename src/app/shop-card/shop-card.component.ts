import { Component, OnInit, Input, } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  
  @Input() products: product;
  

  // let key = 'Item 1';


  constructor(){}

  

  addItem(products: product){
    var num = localStorage.length + 1;
    let key = num.toString();
    localStorage.setItem(key , JSON.stringify({ Name: products.name, Price: products.price, 
      Description: products.description, ImagePath: products.imagePath }));
      let item = JSON.parse(localStorage.getItem(key));
  }

  removeItem(){
  }

  buyItems(){
    localStorage.clear();
  }

  clearShopCard(){
    localStorage.clear();
  }

  ngOnInit() {
  
  }

  
 
}
