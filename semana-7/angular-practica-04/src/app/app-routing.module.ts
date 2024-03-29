import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    title: 'Home',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'anime',
        loadChildren: () =>
          import('../app/modules/anime/anime.module').then(
            (m) => m.AnimeModule
          ),
      },
      {
        path: 'taylor',
        loadChildren: () =>
          import('../app/modules/taylor/taylor.module').then(
            (m) => m.TaylorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
