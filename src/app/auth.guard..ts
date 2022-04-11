import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.CurrentUserValue;
        if (user) {
            // vérifier si la route est restreinte par rôle
            if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
                // rôle non autorisé donc rediriger vers la page d'accueil
                this.router.navigate(['/']);
                return false;
            }

            // rôle autorisé 
            return true;
        }

        // pas connecté donc rediriger vers la page de connexion avec l'url de retour
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}