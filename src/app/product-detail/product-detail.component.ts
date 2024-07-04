import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
// import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})

// ----implementes OnInit para pode rutilizar la info que llegue
export class ProductDetailComponent implements OnInit {
  //se define una variable
  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,

    private _apiService: ApiService
  ) {}

  //manjea la info que llega
  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        // asi se muetsra lke producto de forma dinamica
        this._apiService.getProduct(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.color = (this.product?.price as number) < 5 ? 'red' : '';
            this.loading = false;
          },
          
        });
      },
      error: (error: any) => {
        console.log(error);
        this.loading = false;
      },
    });
  }
}
