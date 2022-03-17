import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-tel-accessoires',
  templateUrl: './tel-accessoires.component.html',
  styleUrls: ['./tel-accessoires.component.css']
})
export class TelAccessoiresComponent implements OnInit {

  articles : Array<Article> =[]
  articleSelected: boolean =false;
  totalItem! : number ;
  constructor(
    private telAccessoiresService: ArticleService,
    private cartService :CartService
  ) { }

  ngOnInit(): void {
    this.telAccessoiresService.getAllArticleByCategory(CategoryEnum.TEL_ACCESSOIRES)
     .subscribe(res => {
      this.articles  = res;
    });
  }
  totalProductInCart(){
    this.telAccessoiresService.getAllArticles()
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
