import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  declarations: [ArticuloComponent],
  imports: [CommonModule],
  exports: [ArticuloComponent],
})
export class ArticleModule {}
