import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../service/manga.service';
import { Manga } from '../../interface/manga.interface';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss'],
})
export class MangaComponent implements OnInit {
  resultado: Manga[] = [];
  busqueda: string = '';
  constructor(private Service: MangaService) {}

  busquedaFiltrada() {
    if (this.busqueda.length === 0) {
      return;
    }
    this.Service.ObtenerManga(this.busqueda).subscribe((resp: any) => {
      this.resultado = resp.data;
    });
  }

  ngOnInit(): void {}
}
