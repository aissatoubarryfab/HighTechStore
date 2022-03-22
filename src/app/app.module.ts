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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DetailsArticleComponent } from './modules/datails-article/details_article.component';






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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    OrdinateurModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialog,
    MatDialogRef,
    MatDialogModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
