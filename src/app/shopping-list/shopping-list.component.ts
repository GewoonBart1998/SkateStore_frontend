import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { ItemDetailsComponent } from '../item-details/item-details.component';
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

  // products: Array<product>
  // products = []
  products: product[] =[];


  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(){
    this.productService.list().subscribe( res=> {
      for (let i = 0; i != res.length; i++) {
        this.products.push(new product(
          res['content'][i].product_id,
          res['content'][i].product_name,
          res['content'][i].product_price,
          res['content'][i].product_description,
          res['content'][i].product_path ,
          0)
        );
      }
      });
  }

  onShopItemSelected(Product: product){
    this.shopItemWasSelected.emit(Product);
  }

}
