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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';

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
    BrowserAnimationsModule
    ],
  providers: [ 
    MatDialog,
    // MatDialogRef,
   // BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
