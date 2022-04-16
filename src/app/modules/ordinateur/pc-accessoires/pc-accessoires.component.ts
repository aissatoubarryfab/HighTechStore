import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import {  DetailsArticleComponent } from '../../datails-article/details_article.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { map } from 'rxjs/operators';
import { User } from 'src/app/User';

@Component({
  selector: 'app-pc-accessoires',
  templateUrl: './pc-accessoires.component.html',
  styleUrls: ['./pc-accessoires.component.css']
})
export class PcAccessoiresComponent implements OnInit {
   public articles: any; 
  articlesObjet :any=[]
  articleSelected: boolean =false;
  totalItem! : number ;

  pcAccess = [
    {
      label: 'Souris',
      description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
      imag:'./assets/images/home/PcAc1.png',
       prix: '20 €'
    },
    {
      label: 'Souris',
      description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
      imag:'./assets/images/home/PcAc2.jpg',
       prix: '20 €'
    },
    {
      label: 'Souris',
      description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
      imag:'./assets/images/home/PcAc3.webp',
       prix: '20 €'
    },
    {
    label: 'Souris',
    description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
    imag:'./assets/images/home/PcAc4.jpg',
     prix: '20 €'
  },
  {
  label: 'Souris',
  description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
  imag:'./assets/images/home/PcAC5.jpg',
   prix: '20 €'
},
  ];
  cartService: any;

  constructor(
    private pcAccessoiresService: ArticleService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pcAccessoiresService.getAllArticleByCategory(CategoryEnum.PC_ACCESSOIRES).subscribe(result => {
       this.articles= result;
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
    this.cartService.addtoCart(cart).subscribe((res: boolean)=>{
      this.articleSelected =  res;
      this.totalProductInCart();

    });
  }
  openDetails(idArticle : number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(DetailsArticleComponent, dialogConfig );
      dialogRef.componentInstance.idArticle = idArticle;
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([this.router.url]);
    });
  }

  newProduct(){

  }

  filterProductBy(){

  }
}
