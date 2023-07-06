import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportExcelRoutingModule } from './export-excel-routing.module';
import { Base64imageComponent } from './pages/base64image/base64image.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Base64imageComponent
  ],
  imports: [
    CommonModule,
    ExportExcelRoutingModule,FormsModule
  ]
})
export class ExportExcelModule { }
