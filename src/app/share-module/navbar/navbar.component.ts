import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthenticationService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() totalItem?: number;

  constructor( 
    public router:Router,
    public authenticationService :AuthenticationService,
    protected cartService : CartService,) 
  { }
  get currentUser() : any {
    return this.authenticationService.CurrentUserValue;
  }
  get isConnected() :boolean{
    return localStorage.getItem('user') == null ? false : true ;
  }
  ngOnInit(): void {
    
    this.totalProductInCart();
  }
  totalProductInCart(){
    if(this.isConnected){
      this.cartService.getArticlesInCart(this.currentUser.id[0])
     .subscribe((res : any)=>{
       this.totalItem = res?.length;
      })
    }    
  }
  connect(){
    this.router.navigate(['/Connexion']);
  }
  disconnect(){
    this.authenticationService.logout();

  }

}
