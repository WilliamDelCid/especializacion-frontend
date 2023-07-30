import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionComponent } from './pages/asignacion/asignacion.component';

const routes: Routes = [
{
  path:'',
  component:AsignacionComponent,
  title:'Asignacion de Pedido'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionPedidoRoutingModule { }

