import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthenticationService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem?: number;

  constructor( 
    public router:Router,
    public authenticationService :AuthenticationService,
    protected cartService : CartService,) 
  { }
  get currentUser() : any {
    return this.authenticationService.CurrentUserValue;
  }
  get isConnected() :boolean{
    return this.currentUser == undefined ? false : true ;
  }
  ngOnInit(): void {
    this.totalProductInCart();
  }
  totalProductInCart(){
    this.cartService.getArticlesInCart(this.currentUser.id)
     .subscribe((res : any)=>{
       this.totalItem = res?.length;
       console.log(this.totalItem)
      })
  }
  connect(){
    this.router.navigate(['/Connexion']);
  }
  disconnect(){
    this.authenticationService.logout();

  }

}
