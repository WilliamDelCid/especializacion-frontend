import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/pages/home/home.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'ngIf', component: NgIFComponent, title: 'NgIf' },
  { path: 'ng-Switch', component: NgSwitchComponent, title: 'NgSwitch' },
  { path: 'ng-For', component: NgForComponent, title: 'NgFor' },
  { path: 'binding', component: BindingComponent, title: 'Bilding' },
  { path: 'ngStyle', component: NgStyleComponent, title: 'NgStyle' },
  { path: 'ngClass', component: NgClassComponent, title: 'NgClass' },
  { path: 'ngModel', component: NgModelComponent, title: 'NgModel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
