import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-pc-accessoires',
  templateUrl: './pc-accessoires.component.html',
  styleUrls: ['./pc-accessoires.component.css']
})
export class PcAccessoiresComponent implements OnInit {
  articles : Array<Article> =[]
  constructor(
    private pcAccessoiresService: ArticleService
  ) { }

  ngOnInit(): void {
    this.pcAccessoiresService.getAllArticleByCategory(CategoryEnum.PC_ACCESSOIRES).subscribe(res => {
      this.articles  = res;
    });
  }

}
