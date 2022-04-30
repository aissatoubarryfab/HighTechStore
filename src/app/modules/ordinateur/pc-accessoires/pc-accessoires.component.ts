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
import { AuthenticationService } from 'src/app/services/user.service';

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
 
  constructor(
    private pcAccessoiresService: ArticleService,
    public dialog: MatDialog,
    private router: Router,
    public cartService: CartService,
    public authenticationService :AuthenticationService,

  ) { }
  get currentUser() : any {
    return this.authenticationService.CurrentUserValue;
  }

  ngOnInit(): void {
    this.pcAccessoiresService.getAllArticleByCategory(CategoryEnum.PC_ACCESSOIRES).subscribe(result => {
       this.articles= result;
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
      console.log(res)
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
