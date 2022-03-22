import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import {  DetailsArticleComponent } from '../../datails-article/details_article.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pc-accessoires',
  templateUrl: './pc-accessoires.component.html',
  styleUrls: ['./pc-accessoires.component.css']
})
export class PcAccessoiresComponent implements OnInit {
  articles : Array<Article> =[]
  articleSelected: boolean =false;
  totalItem! : number ;
  constructor(
    private pcAccessoiresService: ArticleService,
    private cartService :CartService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pcAccessoiresService.getAllArticleByCategory(CategoryEnum.PC_ACCESSOIRES).subscribe(res => {
      this.articles  = res;
    });
  }
  totalProductInCart(){
    this.pcAccessoiresService.getAllArticles()
    .subscribe(res=>{
      this.totalItem = res?.length;
      console.log(this.totalItem)
    })
  }
  addtocart(article : Article){
    let cart = new Cart(article.id,article.idUser);
    this.cartService.addtoCart(cart).subscribe(res=>{
      this.articleSelected =  res;
      this.totalProductInCart();

    });
  }
  openDetails(idArticle : number) {

    let dialogRef = this.dialog.open(DetailsArticleComponent, {
      width: '250px',
      data: { name: idArticle }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([this.router.url]);
    });
}
  

}
