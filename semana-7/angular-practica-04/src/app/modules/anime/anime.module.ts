import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeComponent } from './pages/anime/anime.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AnimeComponent],
  imports: [CommonModule, AnimeRoutingModule, HttpClientModule],
})
export class AnimeModule {}
