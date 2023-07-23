import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadExcelRoutingModule } from './read-excel-routing.module';
import { ReadExcelComponent } from './pages/read-excel/read-excel.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    ReadExcelComponent
  ],
  imports: [
    CommonModule,
    ReadExcelRoutingModule,FormsModule,PaginationModule.forRoot()
  ]
})
export class ReadExcelModule { }
