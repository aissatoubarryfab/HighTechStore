import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  isEmptyCart: boolean = false;
  constructor(
    private cartService : CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllProductInCart();
    this.cartService.getTotalPrice(4)
    .subscribe(res=>{
       this.grandTotal =  res;
    });

  }
  getAllProductInCart(){
    this.cartService.getProducts(4)
    .subscribe(res=>{
      this.products = res;
      
    });
  }
  removeItem(idProduit : number ,idUser : number){
    let cart  = new Cart(idProduit,idUser)
    console.log(cart)
    this.cartService.removeCartItem(cart)
    .subscribe({
      next :(data)=>{
        this.getAllProductInCart();
       // this.toastService.success('Le produit est bien été supprimé du panier')
      },
     // error :()=>  this.toastService.error('Erreur lors de la suppression')

  });
  }
  emptycart(){
    this.cartService.removeAllCart(4)
    .subscribe({
      next :(data)=>{
        this.isEmptyCart= true;
        this.getAllProductInCart();    
        //this.toastService.success('Les produits ont bien été supprimés du panier')
      },
     // error :()=>  this.toastService.error('Erreur lors de la suppression')

  });
  }
  openProducts(){
    this.router.navigate(['/articles']);// revenir à toute lesarticle
  }
  getCategory(categoryCode : number) : string {
    switch (categoryCode) {
      case 1:
        return "PC accessoires";
      break;
      case 2:
        return "PC bureau";
      break;
      case 3:
        return "PC portable";
      break;
      case 4:
        return "Smart phone";   
      break;
      case 5:
        return "Tel accessoires ";
      break;
      case 6:
        return "Tel fix";
      break;
      case 7:
        return "Cle USB";    
      break;
      case 8:
        return "Disque dur"; 
      break;
      case 9:
        return "Stockage accessoires";  
      break;
      default :
       return"";
       break;
   
     }
  }

}
