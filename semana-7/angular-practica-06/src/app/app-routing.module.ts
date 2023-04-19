import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    title: 'Inicio',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'manga',
        loadChildren: () =>
          import('../app/modules/manga/manga.module').then(
            (m) => m.MangaModule
          ),
      },
      {
        path: 'ngModel',
        loadChildren: () =>
          import('../app//modules/ng-model/ng-model.module').then(
            (m) => m.NgModelModule
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
