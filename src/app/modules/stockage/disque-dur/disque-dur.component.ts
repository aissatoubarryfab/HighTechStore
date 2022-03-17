import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-disque-dur',
  templateUrl: './disque-dur.component.html',
  styleUrls: ['./disque-dur.component.css']
})
export class DisqueDurComponent implements OnInit {

  articles : Array<Article> =[]
  constructor(
    private disqueDurService: ArticleService
  ) { }

  ngOnInit(): void {
    this.disqueDurService.getAllArticleByCategory(CategoryEnum.DISQUE_DUR)
     .subscribe(res => {
      this.articles  = res;
    });
  }

}
