import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../User';
import { Role } from '../Role';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private userSubject: BehaviorSubject<User| null> ;
    public user: Observable<User|null>;


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
      
       //Mettre l'objet en réserve
       //l'objet utilisateur de localStorage qui permet à l'utilisateur de rester connecté entre les actualisations de page ou après la fermeture du navigateur.
       this.userSubject = new BehaviorSubject<User|null>(JSON.parse(localStorage.getItem('user') || '{}'));
        this.user = this.userSubject.asObservable();
    }

    public get CurrentUserValue(): User |null {
        return this.userSubject?.value;
    }

    login(email: string, password: string) {
      return this.http.get(`http://localhost:8080/ici_war/rest/user/login/${email}/${password}`, { responseType: 'text' })
        .pipe(map(user  => {
            // stocker les détails de l'utilisateur et le jeton jwt dans le stockage local pour que l'utilisateur reste connecté entre les actualisations de la page
            localStorage.setItem('user', JSON.stringify(this.parseXml(user)));
            this.userSubject.next(this.parseXml(user));
            return this.parseXml(user);


        }));
  }
  parseXml(xmlStr : any) : User{ 
    let  results: User = new User('','',0,'','') ;
     var parser ;
     parser = require('xml2js').Parser(  
       {  
         trim: true,  
         explicitArray: true  
       }); 
     parser.parseString(xmlStr, (error: any, result: any) => {
      var item = result.ApplicationConstant;          
           const arr = new User(item.email,item.firstname,item.id,item.lastname,item.role);
           results = arr;
           console.log(arr) ; 
           });
     return results;
   }  
    logout() {
        // supprimer l'utilisateur du stockage local pour déconnecter l'utilisateur
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }
  getById(id: number) {
    return this.http.get<User>(`http://localhost:8080/ici_war/${id}`);
  }

  getAll() {
    return this.http.get<User[]>(`http://localhost:8080/ici_war/users`);
  }
  get isConnected() :boolean{
    return  localStorage.getItem('user') == null ? false : true ;
  }  

  isAdmin(){
   return this.isConnected && this.CurrentUserValue?.role[0] == 'admin' ? true : false;
  }
}