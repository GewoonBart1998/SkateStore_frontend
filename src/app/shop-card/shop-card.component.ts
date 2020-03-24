import { Component, OnInit, Input, } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { storageService } from '../services/storage-service';
// import { snackbarService } from '../services/snackbar-service';




@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {


  cartProducts: product[] =[];
  Totaalprijs: number = 0;
  private array_elements: string[];
  current: string = null;
  cnt: number = 0;



  constructor(
    private storageService: storageService,

  ) { }


  ngOnInit() {
    this.loadcart();

  }

  public loadcart(){
    console.log(localStorage.length)
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
      this.Totaalprijs += item.Price * item.amount;
      this.cartProducts.push(new product(item.Id, item.Name, item.Price, item.Description, item.ImagePath, item.amount));
    }
  }

  public clearCart(){
    this.storageService.clearShopCard();
    window.location.reload();

  }

  public orderCart(){
    this.storageService.clearShopCard();
    window.location.reload();
  }








}
