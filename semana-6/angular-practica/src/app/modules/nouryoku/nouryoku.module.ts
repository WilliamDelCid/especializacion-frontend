import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouryokuRoutingModule } from './nouryoku-routing.module';
import { NouryokuComponent } from './pages/nouryoku/nouryoku.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [NouryokuComponent, CardComponent],
  imports: [CommonModule, NouryokuRoutingModule, HttpClientModule],
})
export class NouryokuModule {}
