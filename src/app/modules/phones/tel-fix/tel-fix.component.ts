import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Cart } from 'src/app/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsArticleComponent } from '../../datails-article/details_article.component';
import { AuthenticationService } from 'src/app/services/user.service';
import { NewproductComponent } from 'src/app/newproduct/newproduct.component';

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
    public authenticationService :AuthenticationService,

    ) { }
    get currentUser() : any {
      return this.authenticationService.CurrentUserValue;
    }

    loadArticles(){
      this.telFixService.getAllArticleByCategory(CategoryEnum.PC_PORTABLE).subscribe(result => {
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
  openDetails(article : Article) {
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = article;
    
      const dialogRef = this.dialog.open(DetailsArticleComponent,
      dialogConfig);

      dialogRef.afterClosed().subscribe(   
        
        val => {
          console.log(val)
          this.telFixService.updateArticle(val.id,
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.TEL_FIX,
            val.idUser,
            val.prix).subscribe(res=>{
              console.log('bbb')
              this.loadArticles();
          });
        }
      );
  }
  
  newProduct(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const article = new Article(0,'','',this.currentUser.id[0],0, '','', CategoryEnum.TEL_FIX);
    dialogConfig.data = article;
    

    const dialogRef = this.dialog.open(NewproductComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
        val => {
          this.telFixService.addArticle(
            val.nom,
            val.marque,
            val.description,
            val.photo,
            CategoryEnum.TEL_FIX,
            val.idUser,
            val.prix
          ).subscribe(res=>{
  
            this.loadArticles();
          });
          }
    );
  }

}
