import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

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
        path: 'asignacion',
        loadChildren: () => import('@asignacion/asignacion-pedido.module').then(m => m.AsignacionPedidoModule)
      },
  ]
},
// { path: 'not-found', component:AsignacionComponent },
// { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
