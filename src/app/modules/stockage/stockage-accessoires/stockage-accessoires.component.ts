import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsArticleComponent } from '../../datails-article/details_article.component';

@Component({
  selector: 'app-stockage-accessoires',
  templateUrl: './stockage-accessoires.component.html',
  styleUrls: ['./stockage-accessoires.component.css']
})
export class StockageAccessoiresComponent implements OnInit {

 
  articles : Array<Article> =[]
  articleSelected: boolean =false;
  totalItem! : number ;

  StockAccess= [
    {
      label: 'Souris',
      description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
       prix: '20 €'
    },
    {
      label: 'Souris',
      description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
       prix: '20 €'
    },
    {
      label: 'Souris',
      description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
       prix: '20 €'
    },
    {
    label: 'Souris',
    description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
     prix: '20 €'
  },
  {
  label: 'Souris',
  description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
   prix: '20 €'
},
{
label: 'Souris',
description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
 prix: '20 €'
},
  ];


  constructor(
    private cartService :CartService,
    private stockageAccessoires: ArticleService,
    public dialog: MatDialog,
    private router: Router,
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
  /*addtocart(article : Article){
    let cart = new Cart(article.id,article.idUser);
    this.cartService.addtoCart(cart).subscribe(res=>{
      this.articleSelected =  res;
      this.totalProductInCart();

    });
  }*/

  openDetails(idArticle : number) {

    let dialogRef = this.dialog.open(DetailsArticleComponent, {
      width: '250px',
      data: { name: idArticle }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([this.router.url]);
    });
  }
  addtocart(){}

}
