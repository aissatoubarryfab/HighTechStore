import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-tel-fix',
  templateUrl: './tel-fix.component.html',
  styleUrls: ['./tel-fix.component.css']
})
export class TelFixComponent implements OnInit {

  articles : Array<Article> =[]
  articleSelected: boolean =false;
  totalItem! : number ;
  constructor(
    private cartService :CartService,
    private telFixService: ArticleService
    
  ) { }

  ngOnInit(): void {
    this.telFixService.getAllArticleByCategory(CategoryEnum.TEL_FIX)
     .subscribe(res => {
      this.articles  = res;
    });
  }
  totalProductInCart(){
    this.telFixService.getAllArticles()
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
