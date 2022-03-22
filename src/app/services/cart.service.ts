import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  getProducts(idUser: number): Observable<Cart[]>{
    return this.http.post<Cart[]>("http://localhost:8080/cart/list",idUser);
  }
  addtoCart(cart : Cart) :Observable<boolean>
  {
    return this.http.post<boolean>("http://localhost:8080/cart/create",cart)
  }
  getTotalPrice(idUser: number) :Observable<number>{
    return this.http.post<number>("http://localhost:8080/cart/totalPrice",idUser);
  }
  removeCartItem(cart : Cart):Observable<boolean>{
    return this.http.post<boolean>(`http://localhost:8080/cart/delete`,cart);
  }
  removeAllCart(idUser: number):Observable<boolean>{
    return this.http.post<boolean>(`http://localhost:8080/cart/deleteAll`,idUser);
  }
}