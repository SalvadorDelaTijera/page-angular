import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

// ----implementes OnInit para pode rutilizar la info que llegue
export class ProductDetailComponent  implements OnInit{

//se define una variable 
  product?: Product;
  productList: Product[] = productsList;
  loading: boolean = true;
  color: string = '';

  
  constructor(private _route:ActivatedRoute) {}

  //manjea la info que llega
  ngOnInit(): void {
    setTimeout(()=>{
      this._route.params.subscribe(params =>{
// asi se muetsra lke producto de forma dinamica
        this.product = this.productList.find(product => product.id == params['productId']);
        this.color = this.product?.price as number < 5 ? 'red' : '';
        this.loading = false;
      });
    },1500)

  }

}
 