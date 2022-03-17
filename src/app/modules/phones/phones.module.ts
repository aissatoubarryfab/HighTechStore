import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';
import { TelFixComponent } from './tel-fix/tel-fix.component';
import { TelAccessoiresComponent } from './tel-accessoires/tel-accessoires.component';


@NgModule({
  declarations: [
    SmartPhoneComponent,
    TelFixComponent,
    TelAccessoiresComponent
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
