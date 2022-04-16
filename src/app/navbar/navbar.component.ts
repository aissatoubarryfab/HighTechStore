import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( 
    public router:Router,
    public authenticationService :AuthenticationService) 
  { }
  get currentUser() : any {
    return this.authenticationService.CurrentUserValue;
  }
  get isConnected() :boolean{
    return this.currentUser == undefined ? false : true ;
  }
  ngOnInit(): void {
  }
  connect(){
    this.router.navigate(['/Connexion']);
  }
  disconnect(){
    this.authenticationService.logout();

  }

}
