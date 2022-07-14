import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { HeaderComponent } from './components/header-component/header.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeTestComponentComponent } from './components/home-test-component/home-test-component.component';

@NgModule({
  declarations: [
    MainComponentComponent,
    HeaderComponent,
    FooterComponentComponent,
    HomeTestComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    // Angular Material
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [MainComponentComponent],
})
export class AppModule {}
