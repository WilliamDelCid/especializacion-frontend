import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { AsideModule } from './aside/aside.module';
import { NavbarModule } from './navbar/navbar.module';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SectionModule,
    NavbarModule,
    AsideModule,
    ArticleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
