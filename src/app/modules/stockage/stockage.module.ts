import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockageRoutingModule } from './stockage-routing.module';
import { ShareModuleModule } from 'src/app/share-module/share-module.module';


@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    StockageRoutingModule,
    ShareModuleModule,
  ]
})
export class StockageModule { }
