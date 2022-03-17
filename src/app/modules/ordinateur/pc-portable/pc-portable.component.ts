import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {

  articles : Array<Article> =[]
  constructor(
    private pcPortableService: ArticleService
  ) { }

  ngOnInit(): void {
    this.pcPortableService.getAllArticleByCategory(CategoryEnum.PC_PORTABLE).subscribe(res => {
      this.articles  = res;
    });
  }

}
