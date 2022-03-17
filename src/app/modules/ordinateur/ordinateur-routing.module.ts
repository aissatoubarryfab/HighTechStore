import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
 //utilisation de Eager leading
const routes: Routes = [
    { path :"Ordinateurs", children:[
    { path: 'PcPortable', component: PcPortableComponent },
    { path: 'PcBureau', component: PcBureauComponent },
    { path: 'PcAccessoires', component: PcAccessoiresComponent },
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdinateurRoutingModule { }
