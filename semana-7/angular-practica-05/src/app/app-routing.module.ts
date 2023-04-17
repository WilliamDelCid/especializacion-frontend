import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NgForComponent } from './modules/directivas/pages/ng-for/ng-for.component';

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
        path: 'nasa',
        loadChildren: () =>
          import('../app/modules/nasa/nasa.module').then((m) => m.NasaModule),
      },
      {
        path: 'directivas',
        loadChildren: () =>
          import('../app/modules/directivas/directivas.module').then(
            (m) => m.DirectivasModule
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
