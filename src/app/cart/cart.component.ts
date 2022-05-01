import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../Article';
import { Cart } from '../Cart';
import { CategoryEnum } from '../enum/category.enum';
import { CartService } from '../services/cart.service';
import { AuthenticationService } from '../services/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  isEmptyCart: boolean = false;
  totalItem: any;

  constructor(
    private cartService : CartService,
    public authenticationService :AuthenticationService,
    private router: Router,
  ) { }
  get currentUser() : any {
    return this.authenticationService.CurrentUserValue;
  }

  ngOnInit(): void {
    this.cartService.getArticlesInCart(this.currentUser?.id[0])
    .subscribe(res=>{
      this.products = res;
      console.log( this.products.length)
      
    });
    this.cartService.getTotalPrice(this.currentUser?.id[0])
    .subscribe(res=>{
       this.grandTotal =  res;
    });
    this.totalProductInCart();

  }
  getAllProductInCart(){
    this.cartService.getArticlesInCart(this.currentUser?.id[0])
    .subscribe(res=>{
      this.products = res;
      
    });
  }
  totalProductInCart(){
    this.cartService.getArticlesInCart(this.currentUser.id[0])
    .subscribe((res : any)=>{
      this.totalItem = res?.length;
     })
  }
  removeItem(idProduit :number){
    this.cartService.removeCartItem(idProduit)
    .subscribe({
      next :(data)=>{
        this.getAllProductInCart();
        this.cartService.getTotalPrice(this.currentUser?.id[0])
        .subscribe(res=>{
           this.grandTotal =  res;
           this.totalProductInCart();
        });
    
       // this.toastService.success('Le produit est bien été supprimé du panier')
      },
     // error :()=>  this.toastService.error('Erreur lors de la suppression')

  });
  }
  emptycart(){
    this.cartService.removeAllCart(this.currentUser.id[0])
    .subscribe({
      next :(data)=>{
        this.isEmptyCart= true;
        this.getAllProductInCart();  
        this.totalProductInCart();  
        //this.toastService.success('Les produits ont bien été supprimés du panier')
      },
     // error :()=>  this.toastService.error('Erreur lors de la suppression')

  });
  }
  openProducts(){
    this.router.navigate(['/']);// revenir à l'acceuil pou reselectionner
  }
  getCategory(categoryCode : number) : string {
        
    if(categoryCode == CategoryEnum.PC_ACCESSOIRES) {
    return "PC accessoires";
    }else  if(categoryCode == CategoryEnum.PC_BUREAU) {
        return "PC bureau";
    }else  if(categoryCode == CategoryEnum.PC_PORTABLE) {
        return "PC portable";
    } else  if(categoryCode == CategoryEnum.SMART_PHONE) {
        return "Smart phone";
    } else  if(categoryCode == CategoryEnum.TEL_ACCESSOIRES) {
        return "Tel accessoires ";
    } else  if(categoryCode == CategoryEnum.TEL_FIX) {
        return "Tel fix";
    } else  if(categoryCode == CategoryEnum.CLE_USB) {
        return "Cle USB";
    }else  if(categoryCode == CategoryEnum.DISQUE_DUR) {
        return "Disque dur";
    }else  if(categoryCode == CategoryEnum.STOCKAGE_ACCESSOIRES) {
        return "Stockage accessoires";
    }  
    return "";

  }

}
