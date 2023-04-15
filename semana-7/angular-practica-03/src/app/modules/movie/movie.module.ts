import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule],
})
export class MovieModule {}
