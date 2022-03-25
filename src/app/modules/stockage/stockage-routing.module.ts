import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleUSBComponent } from './cle-usb/cle-usb.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { StockageAccessoiresComponent } from './stockage-accessoires/stockage-accessoires.component';

//utilisation de  Lazy loading
const routes: Routes = [
  // { path: 'CleUsb', component: CleUSBComponent},
  // { path: 'DisqueDur', component: DisqueDurComponent  },
  // { path: 'StockageAccessoires', component: StockageAccessoiresComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockageRoutingModule { }
