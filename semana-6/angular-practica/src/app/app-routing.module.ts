import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    title: 'Skeleton',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'nekos',
        loadChildren: () =>
          import('src/app/modules/api-nekos/api-nekos.module').then(
            (m) => m.ApiNekosModule
          ),
      },
      {
        path: 'nouryoku',
        loadChildren: () =>
          import('src/app/modules/nouryoku/nouryoku.module').then(
            (m) => m.NouryokuModule
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
