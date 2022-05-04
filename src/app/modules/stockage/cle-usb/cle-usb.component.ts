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
  selector: 'app-cle-usb',
  templateUrl: './cle-usb.component.html',
  styleUrls: ['./cle-usb.component.css']
})
export class CleUSBComponent implements OnInit {

  articles :any =[]
  articleSelected: boolean =false;
  totalItem! : number ;

//   CleUsb= [
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//        prix: '20 €'
//     },
//     {
//       label: 'Souris',
//       description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//        prix: '20 €'
//     },
//     {
//     label: 'Souris',
//     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//      prix: '20 €'
//   },
//   {
//   label: 'Souris',
//   description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//    prix: '20 €'
// },
// {
// label: 'Souris',
// description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
//  prix: '20 €'
// },
//   ];

  constructor(
    private cartService :CartService,
    private cleUsbService: ArticleService,
    public dialog: MatDialog,
    private router: Router,
    public authenticationService :AuthenticationService,

    ) { }
    get currentUser() : any {
      return this.authenticationService.CurrentUserValue;
    }

    loadArticles(){
      this.cleUsbService.getAllArticleByCategory(CategoryEnum.CLE_USB).subscribe(result => {
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
          this.cleUsbService.updateArticle(val.id,
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.CLE_USB,
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
    const article = new Article(0,'','',this.currentUser.id[0],0, '','', CategoryEnum.CLE_USB);
    dialogConfig.data = article;
    

    const dialogRef = this.dialog.open(NewproductComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
        val => {
          this.cleUsbService.addArticle(
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.CLE_USB,
            val.idUser,
            val.prix
          ).subscribe(res=>{
  
            this.loadArticles();
          });
          }
    );
  }
  DeleteArticle(idArticle : number){
    this.cleUsbService.deleteArticle(idArticle).subscribe(res=>{
      this.loadArticles();
    });
  }

}
