import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportarComponent } from './pages/exportar/exportar.component';
import { ExportarRoutingModule } from './exportar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { FullCalendarModule } from '@fullcalendar/angular';
import {ModalModule} from 'ngx-bootstrap/modal'
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
    CommonModule,ExportarRoutingModule,DropzoneModule,ReactiveFormsModule,FullCalendarModule,ModalModule.forRoot(),FormsModule

  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class ExportarModule { }
