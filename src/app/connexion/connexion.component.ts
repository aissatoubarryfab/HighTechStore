import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
messageError : string ='';
  constructor(
    private sa : AuthService, 
    private root : Router
  ) {}

  ngOnInit(): void {
    //let data = ConnexionForm.value
  }

}
