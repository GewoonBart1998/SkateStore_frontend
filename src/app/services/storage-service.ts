import {Injectable} from '@angular/core';
import {product} from "../shopping-list/shop-item.model";

@Injectable({
  providedIn: 'root'
})
export class storageService {

  newkey: number = null;
  id: String = null;
  moetToevoegen: boolean = false;
  constructor(){}





  addItem(products: product){
    if (localStorage.length != 0){
      for (let i = 0; i < localStorage.length ; i++){
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        if(item.Id == products.product_id){
          this.moetToevoegen = false;
          this.ProductOptellen(products, key);
          break;
        }else{
          this.moetToevoegen = true;
        }
      }
      if (this.moetToevoegen == true){
        this.moetToevoegen = false;
        let key = localStorage.length + 1
        this.productToevoegen(products, key.toString());
      }
    }
    else{
      this.productToevoegen(products, "1");
    }
  }



  productToevoegen(products: product, key: string){
    localStorage.setItem(key , JSON.stringify({ Id: products.product_id, Name: products.product_name, Price: products.product_price,
      Description: products.product_description, ImagePath: products.product_path, amount: 1}));
  }

  ProductOptellen(products: product , key: string){
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



  // if (localStorage.length != 0){
  //   for (let i = 0; i < localStorage.length; i++){
  //     let key = localStorage.key(i);
  //     let item = JSON.parse(localStorage.getItem(key));
  //     console.log("key" + key)
  //     if(item.Id == products.product_id){
  //       this.id =  key
  //       this.ProductOptellen(products, key);
  //       break;
  //     }else{
  //       console.log(item.Id)
  //       console.log(products.product_id)
  //       console.log(localStorage.length)
  //       console.log("toevoegen" + true)
  //       this.moetToevoegen = true;
  //     }
  //
  //     console.log("hallo")
  //     if (this.moetToevoegen == true){
  //       let key = localStorage.length +1
  //       this.productToevoegen(products, key.toString());
  //       this.moetToevoegen = false;
  //       break;
  //     }else {
  //       this.ProductOptellen(products, this.id.toString());



}
