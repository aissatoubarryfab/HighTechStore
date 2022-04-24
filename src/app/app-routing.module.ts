import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './auth/login/connexion.component';

import { PcAccessoiresComponent } from './modules/ordinateur/pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './modules/ordinateur/pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './modules/ordinateur/pc-portable/pc-portable.component';

import { SmartPhoneComponent } from './modules/phones/smart-phone/smart-phone.component';
import { TelFixComponent } from './modules/phones/tel-fix/tel-fix.component';
import { TelAccessoiresComponent } from './modules/phones/tel-accessoires/tel-accessoires.component';

import { CleUSBComponent } from './modules/stockage/cle-usb/cle-usb.component';
import { DisqueDurComponent } from './modules/stockage/disque-dur/disque-dur.component';
import { StockageAccessoiresComponent } from './modules/stockage/stockage-accessoires/stockage-accessoires.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard.';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard] },
  { path: 'Connexion', component: ConnexionComponent },

  { path: 'PcPortable', component: PcPortableComponent },
  { path: 'PcBureau', component: PcBureauComponent },
  { path: 'PcAccessoires', component: PcAccessoiresComponent },

  { path: 'Smart', component: SmartPhoneComponent },
  { path: 'Fixe', component: TelFixComponent },
  { path: 'PhoneAccessoires', component: TelAccessoiresComponent },

  { path: 'CleUSB', component: CleUSBComponent },
  { path: 'DisqueDur', component: DisqueDurComponent },
  { path: 'StockageAccesoires', component: StockageAccessoiresComponent },
  { path: 'cart', component: CartComponent },

];
  
@NgModule({
  declarations: [],
    exports: [
      RouterModule
    ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
   // RouterModule.forChild(routes)

  ]
})
export class AppRoutingModule { }
