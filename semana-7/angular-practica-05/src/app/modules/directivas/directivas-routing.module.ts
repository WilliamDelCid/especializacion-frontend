import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';

const routes: Routes = [
  { path: 'ngFor', component: NgForComponent, title: 'ngFor' },
  { path: 'ngModel', component: NgModelComponent, title: 'ngModel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
