import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {

  articles : Array<Article> =[]
  constructor(
    private pcBureauService: ArticleService
  ) { }

  ngOnInit(): void {
    this.pcBureauService.getAllArticleByCategory(CategoryEnum.PC_BUREAU).subscribe(res => {
      this.articles  = res;
    });
  }
}
