import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { miConstante } from '@asignacion/constantes/constantes';

const routes: Routes = [

{
  path:'',
  component:SkeletonComponent,
  title:'Inicio',
  children:[
      {
        path: '',
        loadChildren: () => import('@home/home.module').then(m => m.HomeModule)
      },
      {
        path: `${miConstante}`,
        loadChildren: () => import('@asignacion/asignacion-pedido.module').then(m => m.AsignacionPedidoModule)
      },
  ]
},
  { path: 'not-found', component:NotFoundComponent },
  { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
