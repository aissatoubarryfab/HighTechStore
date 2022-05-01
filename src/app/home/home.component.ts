import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthenticationService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalItem! : number ;
  constructor(
    public cartService: CartService,
    public authenticationService :AuthenticationService,
  ) {}
  
  get currentUser() : any {
    return this.authenticationService.CurrentUserValue;
  }
  ngOnInit(): void {
    this.cartService.getArticlesInCart(this.currentUser?.id[0])
     .subscribe((res : any)=>{
       this.totalItem = res?.length;
      })
  }

}
