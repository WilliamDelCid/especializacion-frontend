import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';
import { Page404Component } from './extrapages/page404/page404.component';
import { IsActiveGuard } from './core/guards/is-active.guard';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule), },
  // tslint:disable-next-line: max-line-length
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule), },
  { path: 'anime', component: LayoutComponent, loadChildren: () => import('./modules/anime/anime.module').then(m => m.AnimeModule),},
  { path: 'empleados', component: LayoutComponent, loadChildren: () => import('./modules/empleado/empleado.module').then(m => m.EmpleadoModule), },
  { path: 'excel', component: LayoutComponent, loadChildren: () => import('./modules/export-excel/export-excel.module').then(m => m.ExportExcelModule), },
  { path: 'bibliotecas', component: LayoutComponent, loadChildren: () => import('./modules/bibliotecas/bibliotecas.module').then(m => m.BibliotecasModule), },
  { path: 'libro', component: LayoutComponent, loadChildren: () => import('./modules/libro/libro.module').then(m => m.LibroModule), },
  { path: 'clinica', component: LayoutComponent, loadChildren: () => import('./modules/clinica/clinica.module').then(m => m.ClinicaModule), },
  { path: 'exportar', component: LayoutComponent, loadChildren: () => import('./modules/exportar/exportar.module').then(m => m.ExportarModule), },
  { path: 'crypto-ico-landing', component: CyptolandingComponent, },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
