import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {product} from "../shopping-list/shop-item.model";
import { storageService } from '../services/storage-service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartProducts: product;
  constructor(
    private storageService: storageService
  ) { }

  ngOnInit() {

  }
  deleteItem(){
    this.storageService.removeItem(this.cartProducts);
    window.location.reload();

  }


}
