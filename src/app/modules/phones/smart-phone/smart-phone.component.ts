import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsArticleComponent } from '../../datails-article/details_article.component';
import { AuthenticationService } from 'src/app/services/user.service';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {
  articles : any =[]
  articleSelected: boolean =false;
  totalItem! : number ;

//   SmartP = [
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/Smart1.jpeg',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/smart2.webp',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/SMART3.webp',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/smart4.webp',
//        prix: '20 €'
//   },
//   {
//     label: 'Souris',
//     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//     imag:'./assets/images/home/smart5.webp',
//      prix: '20 €'
// },

//   ];

  constructor(
    private smartPhoneService: ArticleService,
    private cartService :CartService,
    public dialog: MatDialog,
    private router: Router,
    public authenticationService :AuthenticationService,

  ) { }
  get currentUser() : any {
    return this.authenticationService.CurrentUserValue;
  }

  ngOnInit(): void {
    this.smartPhoneService.getAllArticleByCategory(CategoryEnum.SMART_PHONE)
     .subscribe(res => {
      this.articles  = res;
    });
  }
  totalProductInCart(){
    this.cartService.getArticlesInCart(this.currentUser.id[0])
    .subscribe((res : any)=>{
      this.totalItem = res?.length;
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
