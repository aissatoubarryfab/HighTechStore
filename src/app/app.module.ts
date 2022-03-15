import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> acf9bf70dbc7d050fc14fe01a1f95841dcef3776

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PcPortableComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    HomeComponent
=======
    NavbarComponent
>>>>>>> acf9bf70dbc7d050fc14fe01a1f95841dcef3776
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
