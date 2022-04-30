import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { ShareModuleModule } from 'src/app/share-module/share-module.module';
import { TelFixComponent } from './tel-fix/tel-fix.component';
import { TelAccessoiresComponent } from './tel-accessoires/tel-accessoires.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';



@NgModule({
  declarations: [
    TelFixComponent,
    TelAccessoiresComponent,
    SmartPhoneComponent
    
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule,
    ShareModuleModule,
  ],
  exports: [


    
  ]
})
export class PhonesModule { }
