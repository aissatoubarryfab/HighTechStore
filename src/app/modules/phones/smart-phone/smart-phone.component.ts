import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {
  articles : Array<Article> =[]
  constructor(
    private smartPhoneService: ArticleService
  ) { }

  ngOnInit(): void {
    this.smartPhoneService.getAllArticleByCategory(CategoryEnum.SMART_PHONE)
     .subscribe(res => {
      this.articles  = res;
    });
  }

}
