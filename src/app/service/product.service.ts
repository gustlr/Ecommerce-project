import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Products} from '../models/product';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    // URL to web api
    private productUrl = 'http://localhost:5000/api/product';
    constructor(private http: HttpClient) { }
  
    getAllProduct():Observable<Products[]>{
      return this.http.get<Products[]>(this.productUrl);
    }
    storeProduct(product: Products):Observable<any>{
      return this.http.post<any>(this.productUrl, product,httpOptions);
    }
    getProductById(productId:string):Observable<Products[]>{
      return this.http.get<Products[]>(`${this.productUrl}/${productId}`);
    }
    updateProductById(productdtail: Products, productId:string):Observable<Products>{
      return this.http.put<Products>(`${this.productUrl}/${productId}`,productdtail,httpOptions);
    }
    deleteProductById(id: any): Observable<any> {
      return this.http.delete<any>(`${this.productUrl}/${id}`);
    }
  
}
