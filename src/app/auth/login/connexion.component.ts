import { Component, OnInit } from '@angular/core';;
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/user.service';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : AuthenticationService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(email : string,password : string ){
     this.userService.login(email,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
