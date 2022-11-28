import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoRootModule } from './transloco-root.module';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { LayaoutComponent } from './layaout/layaout.component';
import {MatCardModule} from '@angular/material/card';
import { UnmeldungComponent } from './unmeldung/unmeldung.component';
import { CardComponent } from './card/card.component';
import { FullScreenComponent } from './full-screen/full-screen.component';

@NgModule({
  declarations: [	
    AppComponent,
    LanguageSelectorComponent,
    LayaoutComponent,
    UnmeldungComponent,
      CardComponent,
      FullScreenComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatSidenavModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    TranslocoRootModule,
    MatCardModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
