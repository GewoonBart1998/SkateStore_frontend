import { Component, OnInit } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { storageService } from '../services/storage-service';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product-service"



@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  products: product ;


  constructor(
    private storageService: storageService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.productService.getById(data.id).subscribe(res => {

        let resproduct = new product(
          res['content'][0].product_id,
          res['content'][0].product_name,
          res['content'][0].product_price,
          res['content'][0].product_description,
          res['content'][0].product_path ,
          0
        );
        this.products = resproduct;
      });
    });
  }





 addVerstuurItem(){
    this.storageService.addItem(this.products);
  }


}
