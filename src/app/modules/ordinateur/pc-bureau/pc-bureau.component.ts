import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {
  articles : Array<Article> =[]
  articleSelected: boolean =false;
  totalItem! : number ;
  constructor(
    private pcBureauService: ArticleService,
    private cartService :CartService,
  ) { }

  ngOnInit(): void {
    this.pcBureauService.getAllArticleByCategory(CategoryEnum.PC_BUREAU).subscribe(res => {
      this.articles  = res;
    });
  }
  totalProductInCart(){
    this.pcBureauService.getAllArticles()
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
}
