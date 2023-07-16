import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportarComponent } from './pages/exportar/exportar.component';
import { ExportarRoutingModule } from './exportar-routing.module';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'http://localhost:8080/file/upload',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
  declarations: [
    ExportarComponent
  ],
  imports: [
    CommonModule,ExportarRoutingModule,DropzoneModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class ExportarModule { }
