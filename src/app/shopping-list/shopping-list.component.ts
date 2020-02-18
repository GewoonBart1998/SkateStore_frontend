import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import {ShopCardComponent} from "../shop-card/shop-card.component";
import {ProductService} from "../services/product-service"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ItemDetailsComponent]
})
export class ShoppingListComponent implements OnInit {
  selectedShopItem: product;
  @Output() shopItemWasSelected = new EventEmitter<product>();

  // products: Array<product>;
  products: product[] =[];


  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.productService.list().subscribe(res => {
      for (let i = 0; i < res.length; i++) {

        this.products.push(new product(res[i].product_id, res[i].product_name, res[i].product_price, res[i].product_description, res[i].product_path));
      }
      });
  }

  onShopItemSelected(Product: product){
    this.shopItemWasSelected.emit(Product);
  }

}
