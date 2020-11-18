import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

    // URL to web api
    private userOrderUrl = 'http://localhost:5000/api/userOder';
    constructor(private http: HttpClient) { }
  
    addUserOrder(pord):Observable<any>{
      return this.http.post<any>(this.userOrderUrl, pord,httpOptions);

  
}
}