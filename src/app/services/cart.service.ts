import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../Cart';
import { Article } from '../Article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  getArticlesInCart(idUser: number){
    return this.http.get(`http://localhost:8080/ici_war/rest/cart/listproduct/${idUser}`, { responseType: 'text' }).pipe(map((response: any) =>
    { return this.parseXml(response); }));

  }
  parseXml(xmlStr : any) { 
    var results ;
     var parser ;
     parser = require('xml2js').Parser(  
       {  
         trim: true,  
         explicitArray: true  
       }); 
     parser.parseString(xmlStr, (error: any, result: any) => {
       var obj = result.articles; 
        let  arr = [];   
         for (const k in obj.ApplicationConstant) {  
           var item = obj.ApplicationConstant[k];  
           arr.push({  
             description: item.description[0],  
             id: item.id[0],  
             idCategorie: item.idCategorie[0],  
             idUser: item.idUser[0],
             label: item.label[0],
             quantity : item.quantity[0],
             marque: item.marque[0],
             price: item.price[0]
           });  
         }  
         results = arr;
     });  
     return results;
  }  
  addtoCart(idProduct : number,idUser : number)
  {
    return this.http.get(`http://localhost:8080/ici_war/rest/cart/add/${idProduct}/${idUser}`)
  }
  getTotalPrice(idUser: number) :Observable<number>{
    return this.http.get<number>(`http://localhost:8080/ici_war/rest/cart/totalPrice/${idUser}`);
  }
  removeCartItem(idProduct : number, idUser : number):Observable<boolean>{
    return this.http.get<boolean>(`http://localhost:8080/ici_war/rest/cart/delete/${idProduct}/${idUser}`);
  }
  removeAllCart(idUser: number):Observable<boolean>{
    return this.http.get<boolean>(`http://localhost:8080/ici_war/rest/cart/delete/${idUser}`);
  }

}