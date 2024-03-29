import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaylorComponent } from './pages/taylor/taylor.component';

const routes: Routes = [
  { path: '', component: TaylorComponent, title: 'Miss Taylor' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaylorRoutingModule {}
