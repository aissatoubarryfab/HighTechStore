import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-cle-usb',
  templateUrl: './cle-usb.component.html',
  styleUrls: ['./cle-usb.component.css']
})
export class CleUSBComponent implements OnInit {

  articles : Array<Article> =[]
  constructor(
    private cleUsbService: ArticleService
  ) { }

  ngOnInit(): void {
    this.cleUsbService.getAllArticleByCategory(CategoryEnum.CLE_USB)
     .subscribe(res => {
      this.articles  = res;
    });
  }

}
