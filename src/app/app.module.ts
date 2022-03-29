import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PcPortableComponent } from './modules/ordinateur/pc-portable/pc-portable.component';
import { PcBureauComponent } from './modules/ordinateur/pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './modules/ordinateur/pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './auth/login/connexion.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhonesModule } from './modules/phones/phones.module';
import { OrdinateurModule } from './modules/ordinateur/ordinateur.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsArticleComponent } from './modules/datails-article/details_article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SmartPhoneComponent } from './modules/phones/smart-phone/smart-phone.component';
import { TelFixComponent } from './modules/phones/tel-fix/tel-fix.component';
import { TelAccessoiresComponent } from './modules/phones/tel-accessoires/tel-accessoires.component';
import { CleUSBComponent } from './modules/stockage/cle-usb/cle-usb.component';
import { RouterModule, Routes } from '@angular/router';
import { DisqueDurComponent } from './modules/stockage/disque-dur/disque-dur.component';
import { StockageAccessoiresComponent } from './modules/stockage/stockage-accessoires/stockage-accessoires.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'Connexion', component: ConnexionComponent },

//   { path: 'PcPortable', component: PcPortableComponent },
//   { path: 'PcBureau', component: PcBureauComponent },
//   { path: 'PcAccessoires', component: PcAccessoiresComponent },

//   { path: 'Smart', component: SmartPhoneComponent },
//   { path: 'Fixe', component: TelFixComponent },
//   { path: 'PhoneAccessoires', component: TelAccessoiresComponent },

//   { path: 'CleUSB', component: CleUSBComponent },
//   { path: 'DisqueDur', component: DisqueDurComponent },
//   { path: 'StockageAccesoires', component: StockageAccessoiresComponent },

// ];


@NgModule({
  declarations: [
    AppComponent,
    PcPortableComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    HomeComponent,
    NavbarComponent,
    DetailsArticleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    OrdinateurModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    ],
  providers: [ 
    MatDialog,
    // MatDialogRef,
    BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
