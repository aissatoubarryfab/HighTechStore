import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './auth/login/connexion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'PcPortable', component: PcPortableComponent },
  // { path: 'PcBureau', component: PcBureauComponent },
  // { path: 'PcAccessoires', component: PcAccessoiresComponent },
  { path: 'Stockage', loadChildren :'./stockage/stockage.module#StockageModule' },
  { path: 'Connexion', component: ConnexionComponent },
];
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
