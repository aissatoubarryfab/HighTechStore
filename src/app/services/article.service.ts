import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) {  }
  getAllArticles() : Observable<Article[]>{
    return this.http.get<Article[]>("http://localhost:8080/Article/all");
  }
  getArticleById(idArticle: number):Observable<Article>{
      return this.http.get<Article>(`http://localhost:8080/Article/${idArticle}`);
  }
  addArticle(newAricle:Article):Observable<Article>{
    return this.http.post<Article>("http://localhost:8080/Article/create",newAricle);
  }
  deleteArticle(id: number):Observable<any>{
      return this.http.post<any>("http://localhost:8080/Article/deleteArticle",id);
  }
  updateArticle(ArticleToUpdate:number):Observable<Article>{
      return this.http.post<Article>("http://localhost:8080/Article",ArticleToUpdate);
  }
  getAllArticleByCategory(idCategorie:number) : Observable<Article[]>{
    return this.http.post<Article[]>("http://localhost:8080/product/searchByCategory",idCategorie);
  }

}
