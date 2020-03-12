import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product-service";
import {product} from "../shopping-list/shop-item.model";


@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  productForm : FormGroup;
  adminProducts: product;



  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.productService.getById(data.id).subscribe(product => {
        this.adminProducts = product;
        this.buildForm(product)
      });
    });
  }

  private buildForm(Product: product){
    this.productForm = new FormGroup({
      product_name: new FormControl(Product.product_name),
      product_price: new FormControl(Product.product_price),
      product_path: new FormControl(Product.product_path),
      product_description: new FormControl(Product.product_description)

    });

  }
  Submit(){
    console.log(this.productForm.value);
    this.productService.update(this.adminProducts.product_id, this.productForm.value).subscribe(response => {
    });
    // console.log(this.adminProducts.product_id);

    // console.log(this.productName.value);
  }

}
