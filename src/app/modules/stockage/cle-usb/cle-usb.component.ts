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
  selector: 'app-cle-usb',
  templateUrl: './cle-usb.component.html',
  styleUrls: ['./cle-usb.component.css']
})
export class CleUSBComponent implements OnInit {

  articles :any =[]
  articleSelected: boolean =false;
  totalItem! : number ;

  CleUsb= [
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
    private cleUsbService: ArticleService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cleUsbService.getAllArticleByCategory(CategoryEnum.CLE_USB)
     .subscribe(res => {
      this.articles  = res;
    });
  }
  totalProductInCart(){
    this.cleUsbService.getAllArticles()
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
