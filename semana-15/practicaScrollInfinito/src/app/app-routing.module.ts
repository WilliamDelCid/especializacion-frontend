import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [{
  path:'',
  component: SkeletonComponent,
  children:[{
    path: '',
    loadChildren: () => import('../app/modules/scroll/scroll.module').then(m => m.ScrollModule)
  },]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
