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
    localStorage.setItem(key , JSON.stringify({ Id: products.id, Name: products.name, Price: products.price,
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



}
