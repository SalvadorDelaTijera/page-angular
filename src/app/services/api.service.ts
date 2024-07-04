import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';
import { Product } from '../products/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private baseURL='https://fakestoreapi.com/products'

    constructor(private _httpClient: HttpClient) { }

    public getAllProducts(): Observable<IProduct[]>{// delvuelve un observable de producto
      return this. _httpClient.get<IProduct[]>(`${this.baseURL}`);
    }

    public getProduct(id: number | string): Observable<IProduct>{// devuleve OBSERVABLE D EUN PRIODUCTO
      return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`)
  }

    public getAllCategories() : Observable<Category[]>{// devuleve OBSERVABLE DE CATEGORIAS
      return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct>{// devuleve OBSERVABLE DE UN PRODUCTO
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }
  
  public updateProduct(id: number, product: IProduct):Observable<IProduct>{// devuleve OBSERVABLE D EUN PRIODUCTO
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deletProduct(id: number):Observable<IProduct>{// devuleve OBSERVABLE D EUN PRIODUCTO
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
