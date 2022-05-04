import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';
import { CategoryEnum } from 'src/app/enum/category.enum';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailsArticleComponent } from '../../datails-article/details_article.component';
import { AuthenticationService } from 'src/app/services/user.service';
import { NewproductComponent } from 'src/app/newproduct/newproduct.component';

@Component({
  selector: 'app-stockage-accessoires',
  templateUrl: './stockage-accessoires.component.html',
  styleUrls: ['./stockage-accessoires.component.css']
})
export class StockageAccessoiresComponent implements OnInit {

 
  articles : any =[]
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
    public authenticationService :AuthenticationService,

    ) { }
    get currentUser() : any {
      return this.authenticationService.CurrentUserValue;
    }


    loadArticles(){
      this.stockageAccessoires.getAllArticleByCategory(CategoryEnum.STOCKAGE_ACCESSOIRES).subscribe(result => {
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
          this.stockageAccessoires.updateArticle(val.id,
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.STOCKAGE_ACCESSOIRES,
            val.idUser,
            val.prix).subscribe(res=>{
              this.loadArticles();
          });
        }
      );
  }

  newProduct(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const article = new Article(0,'','',this.currentUser.id[0],0, '','', CategoryEnum.STOCKAGE_ACCESSOIRES);
    dialogConfig.data = article;
    

    const dialogRef = this.dialog.open(NewproductComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
        val => {
          this.stockageAccessoires.addArticle(
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.STOCKAGE_ACCESSOIRES,
            val.idUser,
            val.prix
          ).subscribe(res=>{
  
            this.loadArticles();
          });
          }
    );
  }
  DeleteArticle(idArticle : number){
    this.stockageAccessoires.deleteArticle(idArticle).subscribe(res=>{
      this.loadArticles();
    });
  }

}
