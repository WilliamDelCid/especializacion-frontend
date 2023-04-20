import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MangaComponent } from './pages/manga/manga.component';
import { CardMangaComponent } from './components/card-manga/card-manga.component';


@NgModule({
  declarations: [
    HomeComponent,
    MangaComponent,
    CardMangaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
