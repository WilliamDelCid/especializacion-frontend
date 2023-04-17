import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgForComponent, NgModelComponent],
  imports: [CommonModule, DirectivasRoutingModule, FormsModule],
})
export class DirectivasModule {}
