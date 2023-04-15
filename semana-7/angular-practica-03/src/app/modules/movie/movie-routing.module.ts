import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  { path: '', component: MovieComponent, title: 'Movie' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
