import {Injectable} from '@angular/core';
import {product} from "../shopping-list/shop-item.model";

@Injectable({
  providedIn: 'root'
})
export class storageService {

  newkey: number = null;

  constructor(){}

  addItem(products: product){
    if (localStorage.length != 0){
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        console.log("key: " + key)
        console.log("storage itme: " + item.Name)
        console.log("gekozen product:" + products.product_name)
        if(item.Name == products.product_name){
          this.ProductOptellen(products, key);
          break;

        }else{
          this.productToevoegen(products, key);
          break;
                }
    }
    }else{
      this.productToevoegen(products, "0");
      console.log("nog geen producten " + products.product_name + " toegevoegd");
    }
  }

  productToevoegen(products: product, key: string){
    console.log(products.product_name + " toegevoegd")
    console.log(localStorage.length)
    this.newkey = localStorage.length + 1;
    localStorage.setItem(this.newkey.toString() , JSON.stringify({ Id: products.product_id, Name: products.product_name, Price: products.product_price,
      Description: products.product_description, ImagePath: products.product_path, amount: 1}));
  }

  ProductOptellen(products: product , key: string){
    console.log(products.product_name + " opgeteld")

    let item = JSON.parse(localStorage.getItem(key));
    let newAmount = item.amount + 1;
    localStorage.setItem(key , JSON.stringify({ Id: products.product_id, Name: products.product_name, Price: products.product_price,
      Description: products.product_description, ImagePath: products.product_path, amount: newAmount}));
  }

  removeItem(products: product){
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        if(item.Name == products.product_name){
          localStorage.removeItem(key);
          break;
        }
    }
  }

  buyItems(){
    localStorage.clear();
  }

  clearShopCard(){
    localStorage.clear();

  }



}
