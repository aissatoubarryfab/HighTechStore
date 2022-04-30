import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdinateurRoutingModule } from './ordinateur-routing.module';
import { ShareModuleModule } from 'src/app/share-module/share-module.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    OrdinateurRoutingModule,
    ShareModuleModule,
  ]
})
export class OrdinateurModule { }
