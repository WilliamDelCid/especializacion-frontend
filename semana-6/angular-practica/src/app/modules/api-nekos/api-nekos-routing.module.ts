import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NekoComponent } from './pages/neko/neko.component';

const routes: Routes = [{ path: '', component: NekoComponent, title: 'Neko' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiNekosRoutingModule {}
