import { NgModule } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CommonModule } from '@angular/common';
import { NasaRoutingModule } from './nasa-routing.module';
import { NasaComponent } from './page/nasa/nasa.component';

@NgModule({
  declarations: [NasaComponent],

  imports: [CommonModule, NgxImageZoomModule, NasaRoutingModule],
})
export class NasaModule {}
