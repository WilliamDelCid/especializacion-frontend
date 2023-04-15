import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { HomeModule } from '../app/modules/home/home.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MovieComponent } from './modules/movie/pages/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    title: 'Inicio',

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/home/home.module').then((m) => m.HomeModule), //carga perezoza
      },
      { path: 'movie', component: MovieComponent },
    ],
  },

  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
