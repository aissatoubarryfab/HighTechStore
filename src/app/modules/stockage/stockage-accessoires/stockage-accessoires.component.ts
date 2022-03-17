import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-stockage-accessoires',
  templateUrl: './stockage-accessoires.component.html',
  styleUrls: ['./stockage-accessoires.component.css']
})
export class StockageAccessoiresComponent implements OnInit {

 
  articles : Array<Article> =[]
  constructor(
    private stockageAccessoires: ArticleService
  ) { }

  ngOnInit(): void {
    this.stockageAccessoires.getAllArticleByCategory(CategoryEnum.STOCKAGE_ACCESSOIRES)
     .subscribe(res => {
      this.articles  = res;
    });
  }

}
