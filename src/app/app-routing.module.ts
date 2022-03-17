import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PcPortableComponent } from './modules/ordinateur/pc-portable/pc-portable.component';
import { PcBureauComponent } from './modules/ordinateur/pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './modules/ordinateur/pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './connexion/connexion.component';
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
