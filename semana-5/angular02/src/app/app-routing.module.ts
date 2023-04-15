import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { ErrorComponent } from './error/error.component';
import { API_PETS } from './constants/routes/routes';

const routes: Routes = [
  // Entre llaves definiremos cada una de als rutas de la aplicacion
  {
    path: ``,
    component: SkeletonComponent,
    children: [
      // Implementado carga perezosa al implementar loadChildren
      {
        path: '',
        loadChildren: () =>
          import('@modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'directivas',
        loadChildren: () =>
          import('@modules/directivas/directivas.module').then(
            (m) => m.DirectivasModule
          ),
      },
      {
        path: API_PETS,
        loadChildren: () =>
          import('@modules/mascotas/mascotas.module').then(
            (m) => m.MascotasModule
          ),
      },
    ],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  //Cualquier otra ruta que no sea valdiad redireccione hacia el Home
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
