import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';
import { TelAccessoiresComponent } from './tel-accessoires/tel-accessoires.component';
import { TelFixComponent } from './tel-fix/tel-fix.component';

 //utilisation de Eager leading
 const routes: Routes = [
//   { path :"Phone", children:[
//   { path: 'SmartPhone', component: SmartPhoneComponent },
//   { path: 'TelFix', component: TelFixComponent  },
//   { path: 'TelAccessoires', component: TelAccessoiresComponent },
// ]}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
