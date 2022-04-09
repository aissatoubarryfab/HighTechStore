import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../Article';


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
  getAllArticleByCategory(idCategorie:any){
    return this.http.get<any>("/ici_war/res/articles/list/1").pipe(map((response: any) =>{return response;}));
  }

}
