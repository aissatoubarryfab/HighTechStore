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
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {
  articles :any =[]
  articleSelected: boolean =false;
  totalItem! : number ;

  // pcBur = [
  //   {
  //     label: 'Souris',
  //     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
  //     imag:'./assets/images/home/BurAp.webp',
  //      prix: '20 €'
  //   },
  //   {
  //     label: 'Souris',
  //     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
  //     imag:'./assets/images/home/BurAs.jpg',
  //      prix: '20 €'
  //   },
  //   {
  //     label: 'Souris',
  //     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
  //     imag:'./assets/images/home/BurLenov.avif',
  //      prix: '20 €'
  //   },
  //   {
  //     label: 'Souris',
  //     description: 'ordi a vennnde jzmhdkjdbfhhfnbhgds',
  //     imag:'./assets/images/home/Burappl.jpg',
  //      prix: '20 €'
  // },
  
  // ];

  constructor(
    private pcBureauService: ArticleService,
    private cartService :CartService,
    public dialog: MatDialog,
    private router: Router,
    public authenticationService :AuthenticationService,

    ) { }
    get currentUser() : any {
      return this.authenticationService.CurrentUserValue;
    }

    loadArticles(){
      this.pcBureauService.getAllArticleByCategory(CategoryEnum.PC_BUREAU).subscribe(result => {
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
    this.cartService.addtoCart(article.id,this.currentUser.id[0]).subscribe(res=>{
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
          this.pcBureauService.updateArticle(val.id,
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.PC_BUREAU,
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
    const article = new Article(0,'','',this.currentUser.id[0],0, '','', CategoryEnum.PC_BUREAU);
    dialogConfig.data = article;
    

    const dialogRef = this.dialog.open(NewproductComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
        val => {
          this.pcBureauService.addArticle(
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.PC_BUREAU,
            val.idUser,
            val.prix
          ).subscribe(res=>{
  
            this.loadArticles();
          });
          }
    );
  }
  DeleteArticle(idArticle : number){
    this.pcBureauService.deleteArticle(idArticle).subscribe(res=>{
      this.loadArticles();
    });
  }
  
}
