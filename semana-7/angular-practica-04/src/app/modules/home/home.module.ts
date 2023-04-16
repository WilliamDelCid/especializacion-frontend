import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgIfElseComponent } from './components/ng-if-else/ng-if-else.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgBindingComponent } from './components/ng-binding/ng-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NgForComponent,
    NgSwitchComponent,
    NgIfElseComponent,
    NgClassComponent,
    NgBindingComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
