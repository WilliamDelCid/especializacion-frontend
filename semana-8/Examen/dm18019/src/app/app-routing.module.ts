import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheletonComponent } from './layout/sheleton/sheleton.component';

const routes: Routes = [{path:'',component:SheletonComponent,title:'Home',children:[
  {
    path: '',
    loadChildren: () => import('../app/modules/busqueda/busqueda.module').then(m => m.BusquedaModule)
  },
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
