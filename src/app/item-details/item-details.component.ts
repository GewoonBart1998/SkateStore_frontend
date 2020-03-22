import { Component, OnInit, Input } from '@angular/core';
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
      this.productService.getById(data.id).subscribe(product => {
        this.products = product;


      });
    });
  }


 addVerstuurItem(){
    this.storageService.addItem(this.products);
  }


}
