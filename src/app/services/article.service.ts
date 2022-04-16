import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Article } from '../Article';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    "Access-Control-Allow-Origin": "*",
    
  } )
};
declare var require: any
const xml2js = require('xml2js');

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

//Utiliser http client pour appeller l'API rest
  constructor(private http:HttpClient) {  }

  getAllArticles() : Observable<Article[]>{
    return this.http.get<Article[]>("http://localhost:8080/ici_war/rest/articles/all");
  }
  getArticleById(idArticle: number){
      return this.http.get(`http://localhost:8080/ici_war/rest/articles/${idArticle}`, { responseType: 'text' });
  }
  addArticle(newAricle:Article):Observable<Article>{
    return this.http.post<Article>("http://localhost:8080/ici_war/rest/articles/create",newAricle);
  }
  deleteArticle(id: number):Observable<any>{
      return this.http.delete<any>(`http://localhost:8080/ici_war/rest/articles/${id}`);
  }
  updateArticle(ArticleToUpdate:number):Observable<Article>{
   return this.http.post<Article>("/http://localhost:8080/ici_war/rest/articles",ArticleToUpdate);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAllArticleByCategory(idCategorie:number){
    return this.http.get(`http://localhost:8080/ici_war/rest/articles/list/${idCategorie}`, { responseType: 'text' }).pipe(map((response: any) =>
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
             marque: item.marque[0],
             price: item.price[0]
           });  
         }  
         results = arr;
     });  
     return results;
   }  
  
  
}
