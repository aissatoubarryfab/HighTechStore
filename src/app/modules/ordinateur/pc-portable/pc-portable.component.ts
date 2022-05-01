import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsArticleComponent } from '../../datails-article/details_article.component';
import { AuthenticationService } from 'src/app/services/user.service';
import { NewproductComponent } from 'src/app/newproduct/newproduct.component';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {

  articles : any =[]
  articleSelected: boolean =false;
  totalItem! : number ;

//   pcPort = [
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/ACER.avif',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/Acert.jpg',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/AZUS.webp',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//       imag:'./assets/images/home/HP.webp',
//        prix: '20 €'
//   },
//   {
//     label: 'Souris',
//     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//     imag:'./assets/images/home/Lenovo.webp',
//      prix: '20 €'
// },

//   ];

  constructor(
    private pcPortableService: ArticleService,
    private cartService :CartService,
    public dialog: MatDialog,
    protected router: Router,
    public authenticationService :AuthenticationService,

    ) { }
    get currentUser() : any {
      return this.authenticationService.CurrentUserValue;
    }

    loadArticles(){
      this.pcPortableService.getAllArticleByCategory(CategoryEnum.PC_PORTABLE).subscribe(result => {
        this.articles= result;
     });   
    } 

  ngOnInit(): void { 
    this.loadArticles();
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


  newProduct(){
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const article = new Article(0,'','',this.currentUser.id[0],0, '','', CategoryEnum.PC_PORTABLE);
    dialogConfig.data = article;
    

    const dialogRef = this.dialog.open(NewproductComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
        val => {
          this.pcPortableService.addArticle(val).subscribe(res=>{
  
            this.loadArticles();
          });
          }
    );
  }

}
