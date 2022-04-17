import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetailsArticleComponent } from '../../datails-article/details_article.component';

@Component({
  selector: 'app-tel-fix',
  templateUrl: './tel-fix.component.html',
  styleUrls: ['./tel-fix.component.css']
})
export class TelFixComponent implements OnInit {

  articles : any =[]
  articleSelected: boolean =false;
  totalItem! : number ;

//   TelFix= [
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/fix1.jpg',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/fix2.jpg',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/fix3.jpg',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/fix4.jpg',
//        prix: '20 €'
//   },
//   {
//     label: 'Souris',
//     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//     imag:'./assets/images/home/fix5.jpg',
//      prix: '20 €'
// },
// {
//   label: 'Souris',
//   description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//   imag:'./assets/images/home/fix6.webp',
//    prix: '20 €'
// },
//   ];

  constructor(
    private cartService :CartService,
    private telFixService: ArticleService,
    public dialog: MatDialog,
    private router: Router,
    
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
    this.cartService.addtoCart(article.id,article.idUser).subscribe(res=>{
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
