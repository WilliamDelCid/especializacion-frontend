import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgIfElseComponent } from './components/ng-if-else/ng-if-else.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgBindingComponent } from './components/ng-binding/ng-binding.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    children: [
      {
        path: 'ngFor',
        component: NgForComponent,
      },
      {
        path: 'ngSwitch',
        component: NgSwitchComponent,
      },
      {
        path: 'ngIfElse',
        component: NgIfElseComponent,
      },
      {
        path: 'ngClass',
        component: NgClassComponent,
      },
      {
        path: 'ngBinding',
        component: NgBindingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
