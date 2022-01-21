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
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.productService.getById(data.id).subscribe(res => {
        let temp = new product(
          res['content'][0].product_id,
          res['content'][0].product_name,
          res['content'][0].product_price,
          res['content'][0].product_description,
          res['content'][0].product_path ,
          0
        )
        this.adminProducts = temp;
        this.buildForm(temp)
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
    let resproduct = new product(
      this.adminProducts.product_id,
      this.productForm.value.product_name,
      this.productForm.value.product_price,
      this.productForm.value.product_description,
      this.productForm.value.product_path ,
      0
    );
    console.log(resproduct)
    this.productService.edit(resproduct.product_id, resproduct).subscribe(response => {
    });
  }

}
