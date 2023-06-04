import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollComponent } from './modules/scroll/pages/scroll/scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardscrollComponent } from './modules/scroll/components/cardscroll/cardscroll.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    HeaderComponent,
    FooterComponent,
    ScrollComponent,CardscrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
