import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiNekosRoutingModule } from './api-nekos-routing.module';
import { NekoComponent } from './pages/neko/neko.component';
import { NekoService } from './services/neko.service';
import { CardNekoComponent } from './components/CardNeko/CardNeko.component';

@NgModule({
  declarations: [NekoComponent, CardNekoComponent],
  imports: [CommonModule, ApiNekosRoutingModule],
})
export class ApiNekosModule {}
