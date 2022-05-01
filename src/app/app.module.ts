import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PcPortableComponent } from './modules/ordinateur/pc-portable/pc-portable.component';
import { PcBureauComponent } from './modules/ordinateur/pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './modules/ordinateur/pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './auth/login/connexion.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './share-module/navbar/navbar.component';
import { PhonesModule } from './modules/phones/phones.module';
import { OrdinateurModule } from './modules/ordinateur/ordinateur.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsArticleComponent } from './modules/datails-article/details_article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
<<<<<<< Updated upstream
import { ShareModuleModule } from './share-module/share-module.module';
import { CleUSBComponent } from './modules/stockage/cle-usb/cle-usb.component';
import { DisqueDurComponent } from './modules/stockage/disque-dur/disque-dur.component';
import { StockageAccessoiresComponent } from './modules/stockage/stockage-accessoires/stockage-accessoires.component';
=======
import { NewproductComponent } from './newproduct/newproduct.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    PcPortableComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    HomeComponent,
    DetailsArticleComponent,
    FooterComponent,
    CartComponent,
<<<<<<< Updated upstream
    DisqueDurComponent,
    CleUSBComponent,
    StockageAccessoiresComponent
=======
    NewproductComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    ShareModuleModule
    ],
  providers: [ 
    MatDialog,
    // MatDialogRef,
   // BrowserAnimationsModule
  ],
  exports :[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
