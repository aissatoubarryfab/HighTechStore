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
import { NewproductComponent } from 'src/app/newproduct/newproduct.component';

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
   this.loadArticles();  
  }  
  
  loadArticles(){
    console.log('aaa')
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
          this.pcAccessoiresService.updateArticle(val.id,
            val.nom,
            val.marque,
            val.description,
            CategoryEnum.PC_ACCESSOIRES,
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
    const article = new Article(0,"","",this.currentUser.id[0],0, "","", CategoryEnum.PC_ACCESSOIRES);
    dialogConfig.data = article;
    

    const dialogRef = this.dialog.open(NewproductComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
     
        val => {
          console.log(val)
          this.pcAccessoiresService.addArticle(
            val.nom,
            val.marque,
            val.description,
            val.photo,
            CategoryEnum.PC_ACCESSOIRES,
            val.idUser,
            val.prix
          ).subscribe(res=>{
  
            this.loadArticles();
          });
          }
    );
  }

  filterProductBy(){

  }
}
