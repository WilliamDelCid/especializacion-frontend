import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouryokuComponent } from './pages/nouryoku/nouryoku.component';

const routes: Routes = [
  { path: '', component: NouryokuComponent, title: 'Nouryoku' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouryokuRoutingModule {}
