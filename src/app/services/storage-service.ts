import {Injectable} from '@angular/core';
import {product} from "../shopping-list/shop-item.model";

@Injectable({
  providedIn: 'root'
})
export class storageService {

  constructor(){}

  addItem(products: product){
    var num = localStorage.length + 1;
    let key = num.toString();
    localStorage.setItem(key , JSON.stringify({ Id: products.product_id, Name: products.product_name, Price: products.product_price,
      Description: products.product_description, ImagePath: products.product_path }));
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



}
