import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-tel-fix',
  templateUrl: './tel-fix.component.html',
  styleUrls: ['./tel-fix.component.css']
})
export class TelFixComponent implements OnInit {

  articles : Array<Article> =[]
  constructor(
    private telFixService: ArticleService
  ) { }

  ngOnInit(): void {
    this.telFixService.getAllArticleByCategory(CategoryEnum.TEL_FIX)
     .subscribe(res => {
      this.articles  = res;
    });
  }

}
