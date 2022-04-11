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
    return this.http.get<Article[]>("/ici_war/rest/articles/all");
  }
  getArticleById(idArticle: number):Observable<Article>{
      return this.http.get<Article>(`/ici_war/rest/articles/${idArticle}`);
  }
  addArticle(newAricle:Article):Observable<Article>{
    return this.http.post<Article>("/ici_war/rest/articles/create",newAricle);
  }
  deleteArticle(id: number):Observable<any>{
      return this.http.delete<any>(`/ici_war/rest/articles/${id}`);
  }
  updateArticle(ArticleToUpdate:number):Observable<Article>{
   return this.http.post<Article>("/ici_war/rest/articles",ArticleToUpdate);
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
  // getAllArticleByCategory(idCategorie:number){
  //   return this.http.get(`http://localhost:8080/ici_war/rest/articles/list/1`, { responseType: 'text' }).pipe(map((rep) =>{
  //     xml2js.parseString(rep, (err: any, result: any) => {
  //       if(err) {
  //           throw err;
  //       }
    
  //       // `result` is a JavaScript object
  //       // convert it to a JSON string
  //       const json = JSON.stringify(result, null, 4);
    
  //       // log JSON string
  //       console.log(json);
  //       console.log(result);
  //      return result;  
  //   });
  //   }), catchError(this.handleError));
  //  // pipe(map((response: any) =>{return response;}))
  // }
   getAllArticleByCategory(idCategorie:number){
    return this.http.get(`http://localhost:8080/ici_war/rest/articles/list/1`, { responseType: 'text' });

  }
  
  
}
