import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockageRoutingModule } from './stockage-routing.module';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { CleUSBComponent } from './cle-usb/cle-usb.component';
import { StockageAccessoiresComponent } from './stockage-accessoires/stockage-accessoires.component';


@NgModule({
  declarations: [
    DisqueDurComponent,
    CleUSBComponent,
    StockageAccessoiresComponent
  ],
  imports: [
    CommonModule,
    StockageRoutingModule
  ]
})
export class StockageModule { }
