import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    SportNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
