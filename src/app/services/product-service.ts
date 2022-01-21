import {Injectable} from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { ApiService } from '../services/api-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private resourcePath = '/product';

  constructor(private api: ApiService) {
  }

  list() {
    return this.api.get<Array<product>>(this.resourcePath + '/getAllProducts');
  }

  getById(productId: number) {
    return this.api.get<Array<product>>(this.resourcePath + '/' + productId);
  }

  create(products: product) {
    return this.api.post(this.resourcePath + '/addProduct', products);
  }

  edit(productId: number, products: product) {
    console.log("hallo")
    return this.api.put(this.resourcePath + '/' + productId, products);
  }

  delete(productId: number) {
    return this.api.delete(this.resourcePath + '/' + productId);
  }






}
