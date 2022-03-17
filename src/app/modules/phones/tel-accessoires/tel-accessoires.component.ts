import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-tel-accessoires',
  templateUrl: './tel-accessoires.component.html',
  styleUrls: ['./tel-accessoires.component.css']
})
export class TelAccessoiresComponent implements OnInit {

  articles : Array<Article> =[]
  constructor(
    private telAccessoiresService: ArticleService
  ) { }

  ngOnInit(): void {
    this.telAccessoiresService.getAllArticleByCategory(CategoryEnum.TEL_ACCESSOIRES)
     .subscribe(res => {
      this.articles  = res;
    });
  }

}
