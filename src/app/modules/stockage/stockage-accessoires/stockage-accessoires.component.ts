import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-stockage-accessoires',
  templateUrl: './stockage-accessoires.component.html',
  styleUrls: ['./stockage-accessoires.component.css']
})
export class StockageAccessoiresComponent implements OnInit {

 
  articles : Array<Article> =[]
  articleSelected: boolean =false;
  totalItem! : number ;
  constructor(
    private cartService :CartService,
    private stockageAccessoires: ArticleService
  ) { }

  ngOnInit(): void {
    this.stockageAccessoires.getAllArticleByCategory(CategoryEnum.STOCKAGE_ACCESSOIRES)
     .subscribe(res => {
      this.articles  = res;
    });
  }
  totalProductInCart(){
    this.stockageAccessoires.getAllArticles()
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
